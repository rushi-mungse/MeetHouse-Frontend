import Card from "../../../components/Card/Card";
import InputText from "../../../components/InputText/InputText";
import styles from './StepOtp.module.css'
import Button from "../../../components/Button/Button";

const StepOtp = () => {
    const getOtp=()=>{}
  return (
    <div className={styles.otp_wrapper}>
      <Card text={"Conformation Your Account"} img={"lock"}>
        <InputText textForPlace={"Enter OTP"} onChange={getOtp} />
        <p className={styles.para}>
          Enter OTP texted to you for conformation your account.
        </p>
        <em> Happy Journey!</em>
        <Button text={"Next"} img={"arrow-forward"} />
      </Card>
    </div>
  );
};

export default StepOtp;
