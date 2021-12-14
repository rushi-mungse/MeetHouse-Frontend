import Card from "../../../components/Card/Card";
import InputText from "../../../components/InputText/InputText";
import styles from "./StepOtp.module.css";
import Button from "../../../components/Button/Button";
import { setAuth } from "../../../store/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { verifyOtp } from "../../../http";

const StepOtp = () => {
  const [otp, setOtp] = useState();
  const { phone, hash } = useSelector((state) => state.auth.otp);
  const dispatch = useDispatch();

  const goActivatePage = async () => {
    try {
      if (!otp) return alert("All fields are required!");
      const { data } = await verifyOtp({
        phone: phone,
        hashOtp: hash,
        otp: otp,
      });
      dispatch(setAuth({ data }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.otp_wrapper}>
      <Card text={"Conformation Your Account"} img={"lock-emoji"}>
        <InputText
          textForPlace={"Enter OTP"}
          onChange={(e) => {
            setOtp(e.target.value);
          }}
        />
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
