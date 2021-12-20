import styles from "./Card.module.css";
const Card = ({ text, img, children }) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.heading}>
          {img && <img src={`/images/${img}.png`} alt="logo" />}
          <h1>{text}</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
