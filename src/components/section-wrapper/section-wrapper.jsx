import styles from "./section-wrapper.module.css";

export default function SectionWrapper({ children }) {
  return <div className={styles.section_wrapper}>{children}</div>;
}
