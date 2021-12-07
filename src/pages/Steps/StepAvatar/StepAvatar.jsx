import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import styles from "./StepAvatar.module.css";

const StepAvatar = ({ onNext }) => {
  return (
    <div className={styles.avatar_wrapper}>
      <Card text={"Choose Profile Picture"} img={"monkey-emoji"}>
        <p className={styles.para}>How's this?</p>
        <div className={styles.img_wrapper}>
          <img src="/images/monkey-avatar.png" alt="monkey" />
        </div>
        <label htmlFor="avatar">Select profile picture?</label>
        <input type="file" id="avatar" />
        <Button onClick={onNext} text={"Next"} img={"arrow-forward"} />
      </Card>
    </div>
  );
};

export default StepAvatar;
