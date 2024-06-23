import Container from "@/components/container/container";
import styles from "./error-view.module.css";

export default function ErrorView() {
  return (
    <Container>
      <div className={styles.error}>
        <h1 className={styles.error_text}>
          Looks like there&#39;s nothing in here. Try something else.
        </h1>
      </div>
    </Container>
  );
}
