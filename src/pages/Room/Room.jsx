import styles from "./Room.module.css";
import { getRooms } from "../../http";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const Room = () => {
  const [rooms, setRooms] = useState([]);
  const navigator=useNavigate()
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getRooms();
        setRooms(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
const goToSinglePage=(room)=>{
  navigator(`/rooms/${room.id}`)
}
  return (
    <div className={styles.room_wrap}>
      {rooms.map((room) => {
        return (
          <div className={styles.room} key={room.id} onClick={()=>{goToSinglePage(room)}}>
            <h1>{room.topic}</h1>
            <div className={styles.speaker}>
              <img
                src={`http://localhost:5000${room.ownerId.avatar}`}
                alt="speaker"
                className={styles.avatar}
              />
              <div className={styles.name}>
                <img src="/images/chat-bubble.png" alt="user" />
                <span>{room.ownerId.name}</span>
              </div>
            </div>
            <div className={styles.total}>
              <div className={styles.like}>
                <img src="/images/red-heart.png" alt="heart" />
                <span>: 40</span>
              </div>
              <div>
                <img src="/images/user-icon.png" alt="total" />
                <span>Total : 20</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Room;
