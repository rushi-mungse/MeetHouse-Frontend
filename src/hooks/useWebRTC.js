import { useStateWithWebRTC } from './useStateWithWebRTC'
import { useEffect, useRef, useCallback, } from 'react'

export const useWebRTC = ( roomId, user ) => {
    const [clients, setClients] = useStateWithWebRTC([])
    const audioElements = useRef({});
    const connections = useRef({});
    const localMediaStream = useRef(null);

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
            })
        })
    }, [])

    const provideRef = (instance, userId) => {
        audioElements.current[userId] = instance;
    }
    return { clients, provideRef }
}