import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/authenticate");
  };

  return (
    <div className={`${styles.home_wrapper} "container"`}>
      <Card text={"Welcome to MeetHouse!"} img={"logo"}>
        <p className={styles.para}>
          This is the voice chat service. You can create
          <strong> Open, Public or Private</strong> rooms for voice
          cummunication on any topic. It's usefull for students, teachers,
          bussiness for communication in group.
        </p>
        <em>Happy Journey!</em>
        <Button text={"Get Your Username"} img={"arrow-forward"} onClick={nextPage} />
      </Card>
    </div>
  );
};

export default Home;
