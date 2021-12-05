import styles from './Button.module.css'
const Button = ({text,img,onClick}) => {
    return (
        <div className={styles.btn_wrapper}>
            <button onClick={onClick}>
                <span>{text}</span>
                <img src={`/images/${img}.png`} alt="next-button" />
            </button>
        </div>
    )
}

export default Button
