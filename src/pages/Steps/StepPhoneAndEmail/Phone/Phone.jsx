import Card from "../../../../components/Card/Card";
import Button from "../../../../components/Button/Button";
import InputText from "../../../../components/InputText/InputText";
import styles from '../StepPhoneAndEmail.module.css'

const Phone = () => {
  const getPhoneNumber = () => {};
  return (
    <Card text={"Enter Your Phone Number"} img={"phone"}>
      <InputText textForPlace={"Phone Number"} onChange={getPhoneNumber} />
      <p className={styles.para}>
        Enter your phone number for register your account in this service.
      </p>
      <em> Happy Journey!</em>
      <Button text={"Next"} img={"arrow-forward"} />
    </Card>
  );
};

export default Phone;
