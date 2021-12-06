import Card from "../../../../components/Card/Card";
import Button from "../../../../components/Button/Button";
import InputText from "../../../../components/InputText/InputText";
import styles from '../StepPhoneAndEmail.module.css'
const Email = () => {
  const getEMailId = () => {};
  return (
    <Card text={"Enter Your Email Address"} img={"email-emoji"}>
      <InputText textForPlace={"Email Address"} onChange={getEMailId} />
      <p className={styles.para}>Enter your email address for register your account in this service.</p>
      <em> Happy Journey!</em>
      <Button text={"Next"} img={"arrow-forward"} />
    </Card>
  );
};

export default Email;
