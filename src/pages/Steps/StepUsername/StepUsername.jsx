import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import InputText from "../../../components/InputText/InputText";
import styles from "./StepUsername.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../../../store/slice/activateSlice";
import { useState } from "react";

const StepUsername = ({ onNext }) => {
  const stateUsername = useSelector((state) => state.activate.username);
  const dispatch = useDispatch();
  const [mainUsername, setMainUsername] = useState(stateUsername);
  const goToNextPage = () => {
    try {
      if (!mainUsername) return alert("All fields are rquired!");
      dispatch(setUsername(mainUsername));
      onNext();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className={styles.username_wrapper}>
        <Card text={"Enter Username "} img={"goggle-emoji"}>
          <InputText
            textForPlace={"Username"}
            onChange={(e) => setMainUsername(e.target.value)}
            value={mainUsername}
          />
          <p className={styles.para}>
            Enter your full name for security reson.
          </p>
          <em> Happy Journey!</em>
          <Button onClick={goToNextPage} text={"Next"} img={"arrow-forward"} />
        </Card>
      </div>
    </div>
  );
};

export default StepUsername;
