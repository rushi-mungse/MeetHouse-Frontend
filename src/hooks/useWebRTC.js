import { useStateWithWebRTC } from './useStateWithWebRTC'
 const users = [
        {
            id: 1,
            name: "Rushikesh M"
        },
        {
            id: 2,
            name: "Vaibhav V"
        }
    ]
export const useWebRTC = ({roomId,user}) => {
   
    const [clients, setClients] = useStateWithWebRTC(users)

    return { clients }
}