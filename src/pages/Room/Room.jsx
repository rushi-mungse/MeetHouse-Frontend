import styles from "./Room.module.css";
import { getRooms } from "../../http";
import { useState, useEffect } from "react";

const Room = () => {
  const [rooms, setRooms] = useState([]);
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

  return (
    <div className={styles.room_wrap}>
      {rooms.map((room) => {
        return (
          <div className={styles.room} key={room.id}>
            <h1>JavaScript is perfect for 2020!</h1>
            <div className={styles.speaker}>
              <img
                src="/images/monkey-avatar.png"
                alt="speaker"
                className={styles.avatar}
              />
              <div className={styles.name}>
                <img src="/images/chat-bubble.png" alt="user" />
                <span>Rushikesh Mungse</span>
              </div>
            </div>
            <div className={styles.total}>
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
