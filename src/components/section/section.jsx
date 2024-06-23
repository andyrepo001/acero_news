import Title from "../title/title";
import styles from "./section.module.css";

export default function Section({ children, sectionTitle }) {
  return (
    <section className={styles.section}>
      {sectionTitle && <Title />}
      <div className={styles.content}>{children}</div>
    </section>
  );
}
