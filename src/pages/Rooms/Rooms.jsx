import Room from "../Room/Room";
import styles from "./Rooms.module.css";
const Rooms = () => {
  return (
    <div className={styles.room_wrap}>
      <div className={styles.sub_nav}>
        <div className={styles.left_nav}>
          <h1>All Rooms!</h1>
          <div className={styles.search_bar}>
            <input type="text" placeholder="Search room here!" />
            <img src="/images/search.png" alt="search" />
          </div>
        </div>
        <button>Create Room</button>
      </div>
      <hr />
      <Room/>
      <Room/>
      <Room/>
    </div>
  );
};

export default Rooms;
