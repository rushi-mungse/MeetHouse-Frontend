import Card from "../Card/Card";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <Card text={"Please wait..."}></Card>;
    </div>
  );
};

export default Loader;
