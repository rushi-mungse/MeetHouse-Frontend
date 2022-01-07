import styles from "./RoomModel.module.css";
import { useState } from "react";
import { createRoom } from "../../http/index";
import { useNavigate } from "react-router-dom";

const RoomModal = ({ onClick }) => {
  const [roomType, setRoomType] = useState("Open");
  const [topic, setTopic] = useState("");
  // const [speakers,setSpeakers]=useState("")
  const navigate = useNavigate();
  const sendDataToServer = async () => {
    if (!topic) alert("All fields are required.");
    try {
      const { data } = await createRoom({ topic, roomType });
      navigate(`/rooms/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.roomModalWrap}>
      <div className={styles.roomModalCard}>
        <button className={styles.close} onClick={onClick}>
          <img src="/images/close.png" alt="close" />
        </button>
        <div className={styles.header_wrap}>
          <h2 className={styles.heading}>Enter the room details:</h2>
          <input
            placeholder="Enter Topic Name!"
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
          {/* <div className={styles.speakers}>
            <h2>Speakers:</h2>
            <input type="text" onChange={(e)=>setSpeakers(e.target.value)} placeholder="Enter speakers register phone number..." />
          </div> */}
          <div className={styles.roomType}>
            <div
              onClick={() => setRoomType("Open")}
              className={`${styles.roomTypeBox} ${
                roomType === "Open" ? styles.active : ""
              }`}
            >
              <img src="/images/globe.png" alt="open" />
              <span>Open</span>
            </div>
            <div
              onClick={() => setRoomType("Lock")}
              className={`${styles.roomTypeBox} ${
                roomType === "Lock" ? styles.active : ""
              }`}
            >
              <img src="/images/lock.png" alt="global" />
              <span>Lock</span>
            </div>
            <div
              onClick={() => setRoomType("Social")}
              className={`${styles.roomTypeBox} ${
                roomType === "Social" ? styles.active : ""
              }`}
            >
              <img src="/images/social.png" alt="public" />
              <span>Public</span>
            </div>
          </div>
        </div>
        <hr styles={styles.hrLine} />
        <div className={styles.footer}>
          <p>Start Room, Happy Journey!</p>
          <button onClick={sendDataToServer}>
            <img src="/images/celebration.png" alt="celebration" />
            <span>Create Room</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
