import styles from "./StepPhoneAndEmail.module.css";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import { useState } from "react";

const types = {
  Phone,
  Email,
};

const StepPhoneAndEmail = ({onClick}) => {
  const [type, setType] = useState("Phone");
  const Type = types[type];
  return (
    <div>
      <div className={styles.btn_wrapper}>
        <button
          onClick={() => setType("Phone")}
          className={type === "Phone" ? styles.btn_active : styles.btn}
        >
          <img src="/images/phone-white.png" alt="phone" />
        </button>
        <button
          onClick={() => setType("Email")}
          className={type === "Email" ? styles.btn_active : styles.btn}
        >
          <img src="/images/mail-white.png" alt="email" />
        </button>
      </div>
      <Type goOtpPage={onClick}/>
    </div>
  );
};

export default StepPhoneAndEmail;
