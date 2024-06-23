import Button from "../button/button";
import styles from "./input-with-button.module.css";

export default function InputWithButton({ onButtonClick }) {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} />
      <Button label="search" />
    </div>
  );
}
