import Card from "../../../components/Card/Card";
import InputText from "../../../components/InputText/InputText";
import styles from "./StepOtp.module.css";
import Button from "../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const StepOtp = () => {
  const navigate = useNavigate();
  const getOtp = () => {};
  const goActivatePage = () => {
    navigate("/activate");
  };
  return (
    <div className={styles.otp_wrapper}>
      <Card text={"Conformation Your Account"} img={"lock-emoji"}>
        <InputText textForPlace={"Enter OTP"} onChange={getOtp} />
        <p className={styles.para}>
          Enter OTP texted to you for conformation your account.
        </p>
        <em> Happy Journey!</em>
        <Button text={"Next"} img={"arrow-forward"} onClick={goActivatePage} />
      </Card>
    </div>
  );
};

export default StepOtp;
