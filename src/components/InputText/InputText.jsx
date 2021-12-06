import styles from './InputText.module.css'

const InputText = ({ textForPlace, onChange, ...props }) => {
  return (
    <div className={styles.input_wrapper}>
      <input type="text" placeholder={textForPlace} {...props} onChange={onChange}/>
    </div>
  );
};

export default InputText;
