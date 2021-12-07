import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import InputText from "../../../components/InputText/InputText";
import styles from "./StepUsername.module.css";

const StepUsername = ({ onNext }) => {
  const getUsername = () => {};
  return (
    <div>
      <div className={styles.username_wrapper}>
        <Card text={"Enter Username "} img={"goggle-emoji"}>
          <InputText textForPlace={"Username"} onChange={getUsername} />
          <p className={styles.para}>
            Enter your full name for security reson.
          </p>
          <em> Happy Journey!</em>
          <Button onClick={onNext} text={"Next"} img={"arrow-forward"} />
        </Card>
      </div>
    </div>
  );
};

export default StepUsername;
