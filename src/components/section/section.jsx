import styles from "./section.module.css";
import { Grid } from "@chakra-ui/react";
import Title from "../title/title";

export default function Section({ children, sectionTitle }) {
  return (
    <section className={styles.section}>
      {sectionTitle && <Title />}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>{children}</Grid>
    </section>
  );
}
