import styles from "./container.module.css";

export default function Container({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
