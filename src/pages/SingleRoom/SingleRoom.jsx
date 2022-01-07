import styles from "./SingleRoom.module.css";
import { useParams } from "react-router-dom";
import { getRoomInfo } from "../../http";
import { useEffect, useState } from "react";

const SingleRoom = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getRoomInfo({ id });
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div className={styles.singleRoom}>
      {data && (
        <div className={styles.singleRoom_wrap}>
          <div className={styles.topic}>
            <h1>{data.room.topic}</h1>
            <button>Leave Room</button>
          </div>
          <hr />
          <div className={styles.speakers}>
            {data.room.speakers.map((speaker) => {
              return (
                <div className={styles.speaker} key={speaker._id}>
                  <img src={`http://localhost:5000${speaker.avatar}`} alt="avatar" />
                  <h1>{speaker.name}</h1>
                </div>
              );
            })}
          </div>
          <hr />
        </div>
      )}
    </div>
  );
};

export default SingleRoom;
