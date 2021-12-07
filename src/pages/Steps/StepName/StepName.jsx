import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import InputText from "../../../components/InputText/InputText";
import styles from "./StepName.module.css";

const StepName = ({ onNext }) => {
  const getName = () => {};
  return (
    <div className={styles.name_wrapper}>
      <Card text={"Enter Your Full Name"} img={"goggle-emoji"}>
        <InputText textForPlace={"Full Name"} onChange={getName} />
        <p className={styles.para}>Enter your full name for security reson.</p>
        <em> Happy Journey!</em>
        <Button onClick={onNext} text={"Next"} img={"arrow-forward"} />
      </Card>
    </div>
  );
};

export default StepName;
