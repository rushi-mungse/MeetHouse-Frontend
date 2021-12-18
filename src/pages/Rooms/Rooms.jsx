import Room from "../Room/Room";
import styles from "./Rooms.module.css";
import RoomModel from "../../components/RoomModel/RoomModel";
import { useState } from "react";

const Rooms = () => {
  const [show, setShow] = useState(false);
  const showPopUpForRoom = () => {
    setShow(true);
  };
  const onClick=()=>{
    setShow(false)
  }
  return (
    <>
      {!show && (
        <div className={styles.room_wrap}>
          <div className={styles.sub_nav}>
            <div className={styles.left_nav}>
              <h1>All Rooms!</h1>
              <div className={styles.search_bar}>
                <input type="text" placeholder="Search room here!" />
                <img src="/images/search.png" alt="search" />
              </div>
            </div>
            <button onClick={showPopUpForRoom}>Create Room</button>
          </div>
          <hr />
          <Room />
        </div>
      )}
      {show && <RoomModel onClick={onClick}/>}
    </>
  );
};

export default Rooms;
