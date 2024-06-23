import Link from "next/link";
import styles from "./category.module.css";

export default function Category({ category, slug }) {
  return (
    <Link href="" className={styles.category}>
      {category}
    </Link>
  );
}
