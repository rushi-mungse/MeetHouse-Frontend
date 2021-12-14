import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import InputText from "../../../components/InputText/InputText";
import styles from "./StepName.module.css";
import { setName } from "../../../store/slice/activateSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";

const StepName = ({ onNext }) => {
  const fullUserName = useSelector((state) => state.activate.name);
  const [fullName, setFullName] = useState(fullUserName);
  const dispatch = useDispatch();
  const goToNextPage = () => {
    try {
      if (!fullName) return alert("All fields are required!");
      dispatch(setName(fullName));
      onNext();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.name_wrapper}>
      <Card text={"Enter Your Full Name"} img={"goggle-emoji"}>
        <InputText
          textForPlace={"Full Name"}
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />
        <p className={styles.para}>Enter your full name for security reson.</p>
        <em> Happy Journey!</em>
        <Button onClick={goToNextPage} text={"Next"} img={"arrow-forward"} />
      </Card>
    </div>
  );
};

export default StepName;
