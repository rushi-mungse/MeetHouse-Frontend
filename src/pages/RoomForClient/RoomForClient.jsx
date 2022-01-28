import React, { useState, useEffect } from "react";
import { useWebRTC } from "../../hooks/useWebRTC";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getRoomInfo } from "../../http";
import styles from "./RoomForClient.module.css";
import { useNavigate } from "react-router-dom";

const RoomForClient = () => {
  const { id: roomId } = useParams();
  const user = useSelector((state) => state.auth.user);
  const { clients, provideRef } = useWebRTC(roomId, user);
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getRoomInfo({ roomId });
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [roomId]);
  const navigate=useNavigate()
  const backPage=(e)=>{
    e.preventDefault()
    navigate("/rooms") 
  }
  return (
    <div className={styles.roomForClient}>
      <div className={styles.button_wrapper}>
        <button className={styles.backButton} onClick={backPage}>
          <img src="/images/arrow-left.png" alt="back_button" />
          <h1>All voice Rooms</h1>
        </button>
        <div className={styles.reatingForUser}>
          <img src="/images/win.png" alt="win" />
          <img
            src="/images/red-heart.png"
            alt="heart"
            className={styles.heart}
          />
        </div>
      </div>
      {data && (
        <div className={styles.topic}>
          <h1>
            <img src="/images/fire.png" alt="fire" /> {data.room.topic}
          </h1>
          <button>Leave Room</button>
        </div>
      )}
      <div className={styles.clientsWrap}>
        {clients.map((client) => {
          return (
            <div key={client._id} className={styles.client}>
              <audio
                ref={(instance) => provideRef(instance, client._id)}
                controls
                autoPlay
              ></audio>
              <img src={client.avatar} alt="avatar" />
              <h4>{client.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomForClient;
