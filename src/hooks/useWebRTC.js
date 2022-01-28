import { useStateWithWebRTC } from './useStateWithWebRTC'
import { useEffect, useRef, useCallback, } from 'react'
import { socketInit } from '../socket'
import { ACTIONS } from '../actions'
import freeice from 'freeice'

export const useWebRTC = (roomId, user) => {
    const [clients, setClients] = useStateWithWebRTC([])
    const audioElements = useRef({});
    const connections = useRef({});
    const localMediaStream = useRef(null);
    const socket = useRef(null)
    useEffect(() => {
        socket.current = socketInit();
    }, [])
    const addNewClient = useCallback(
        (newClient, cb) => {
            const lookingFor = clients.find((client) => client._id === newClient._id);
            if (lookingFor === undefined) {
                setClients((existingClients) => [...existingClients, newClient], cb)
            }
        },
        [clients, setClients],
    )
    useEffect(() => {
        const startCapture = async () => {
            localMediaStream.current = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
        }
        startCapture().then(() => {
            addNewClient(user, () => {
                const localElement = audioElements.current[user._id];
                if (localElement) {
                    localElement.volume = 0;
                    localElement.srcObject = localMediaStream.current;
                }
                //use WebRTC
                socket.current.emit(ACTIONS.JOIN, { roomId, user });
            })
        })
        return ()=>{
            localMediaStream.current.getTracks().forEach(track=>track.stop())
            socket.current.emit(ACTIONS.LEAVE,{roomId})
        }
    }, [])
    useEffect(() => {
        const handleNewPeer = async ({ peerId, createOffer, user: remoteUser }) => {
            if (peerId in connections.current) {
                return console.warn(`You are already connected with ${user.name}`)
            }
            connections.current[peerId] = new RTCPeerConnection({
                iceServers: freeice()
            })
            connections.current[peerId].onicecandidat = (event) => {
                socket.current.emit(ACTIONS.RELAY_ICE, {
                    peerId,
                    icecandidate: event.candidate,
                })
            }
            connections.current[peerId].ontrack = ({
                streams: [remoteStream]
            }) => {
                addNewClient(remoteUser, () => {
                    if (audioElements.current[remoteUser._id]) {
                        audioElements.current[remoteUser._id].srcObject = remoteStream
                    } else {
                        let settled = false;
                        const interval = setInterval(() => {
                            if (audioElements.current[remoteUser._id]) {
                                audioElements.current[remoteUser._id].srcObject = remoteStream
                                settled = true
                            }
                            if (settled) {
                                clearInterval(interval);
                            }
                        }, 1000)
                    }
                })
            }
            localMediaStream.current.getTracks().forEach(track => {
                connections.current[peerId].addTrack(track, localMediaStream.current);

            });
            if (createOffer) {
                const offer = await connections.current[peerId].createOffer();
                await connections.current[peerId].setLocalDescription(offer);
                socket.current.emit(ACTIONS.RELAY_SDP, {
                    peerId,
                    sessionDiscription: offer
                })
            }
        }
        socket.current.on(ACTIONS.ADD_PEER, handleNewPeer)
        return () => {
            socket.current.off(ACTIONS.ADD_PEER)
        }

    }, [])
    useEffect(() => {
        socket.current.on(ACTIONS.ICE_CANDIDATE, ({ peerId, icecandidate }) => {
            if (icecandidate) {
                connections.current[peerId].addIceCandidate(icecandidate);
            }
        })
        return () => {
            socket.current.off(ACTIONS.ICE_CANDIDATE)
        }
    }, [])
    useEffect(() => {
        const handleRemoteSdp = async ({ peerId, sessionDiscription: remoteSessionDescription }) => {

            connections.current[peerId].setRemoteDescription(
                new RTCSessionDescription(remoteSessionDescription)
            )
            if (remoteSessionDescription === "offer") {
                const connection = connections.current[peerId];
                const answer = await connection.createAnswer()
                connection.setLocalDescription(answer);
                socket.current.emit(ACTIONS.RELAY_SDP, {
                    peerId,
                    sessionDescription: answer
                })
            }
        }
        socket.current.on(ACTIONS.SESSION_DESCRIPTION, handleRemoteSdp)
        return () => {
            socket.current.off(ACTIONS.SESSION_DESCRIPTION)
        }
    }, [])

    useEffect(() => {
        const handleRemovePeer = async ({ peerId }) => {
            if (connections.current[peerId]) {
                connections.current[peerId].close();
            }
            delete connections.current[peerId];
            delete audioElements.current[peerId];
            setClients(list => list.filter(client => client._id !== user._id))
        }
        socket.current.on(ACTIONS.REMOVE_PEER, handleRemovePeer)

        return () => {
            socket.current.off(ACTIONS.REMOVE_PEER)
        }
    }, [])
    const provideRef = (instance, userId) => {
        audioElements.current[userId] = instance;
    }
    return { clients, provideRef }
}