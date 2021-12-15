import { useState } from "react";
import Button from "../../../components/Button/Button";
import Card from "../../../components/Card/Card";
import styles from "./StepAvatar.module.css";
import { setAvatar } from "../../../store/slice/activateSlice";
import { useDispatch, useSelector } from "react-redux";
import { activate } from "../../../http";
import { setAuth } from "../../../store/slice/authSlice";
import useLodingWithRefresh from "../../../hooks/useLoadingWithRefresh";

const StepAvatar = () => {
  const [image, setImage] = useState("/images/monkey-avatar.png");
  const { name, username, avatar } = useSelector((state) => state.activate);
  const { loading } = useLodingWithRefresh();
  const dispatch = useDispatch();

  const imgCapture = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader(file);
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    };
  };

  const submit = async () => {
    if (!avatar) return alert("All fields are required!");
    try {
      const { data } = await activate({ name, username, avatar });
      dispatch(setAuth({ data }));
    } catch (error) {
      console.log(error);
    }
  };

  return loading ? (
    "Loading"
  ) : (
    <div className={styles.avatar_wrapper}>
      <Card text={"Choose Profile Picture"} img={"monkey-emoji"}>
        <p className={styles.para}>How's this?</p>
        <div className={styles.img_wrapper}>
          <img src={image} alt="monkey" />
        </div>
        <label htmlFor="avatar">Select profile picture?</label>
        <input type="file" id="avatar" onChange={imgCapture} />
        <Button onClick={submit} text={"Next"} img={"arrow-forward"} />
      </Card>
    </div>
  );
};

export default StepAvatar;
