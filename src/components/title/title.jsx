import styles from "./title.module.css";

export default function Title({ title, secondaryTitle, secondaryColor }) {
  return (
    <>
      {title && <h2 className={styles.title}>{title}</h2>}
      {secondaryTitle && (
        <h2 className={styles.secondary} style={{ color: secondaryColor }}>
          {secondaryTitle}
        </h2>
      )}
    </>
  );
}
