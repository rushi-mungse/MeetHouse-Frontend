import Card from "../../../../components/Card/Card";
import Button from "../../../../components/Button/Button";
import InputText from "../../../../components/InputText/InputText";
import styles from "../StepPhoneAndEmail.module.css";
import { sendOtp } from "../../../../http";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../../store/slice/authSlice";

const Phone = ({ goOtpPage }) => {
  const [phone, setPhone] = useState("");
  const getPhoneNumber = (e) => {
    setPhone(e.target.value);
  };

  const dispatch = useDispatch();

  const submit = async () => {
    if (!phone) {
      return alert("All fields are requires!");
    }
    try {
      const { data } = await sendOtp({ phone });
      console.log(data);
      dispatch(setOtp({ phone: data.phone, hash: data.hashOtp }));
      goOtpPage();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card text={"Enter Your Phone Number"} img={"phone"}>
      <InputText textForPlace={"Phone Number"} onChange={getPhoneNumber} />
      <p className={styles.para}>
        Enter your phone number for register your account in this service.
      </p>
      <em> Happy Journey!</em>
      <Button text={"Next"} img={"arrow-forward"} onClick={submit} />
    </Card>
  );
};

export default Phone;
