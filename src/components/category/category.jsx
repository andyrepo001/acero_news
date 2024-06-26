import styles from "./category.module.css";
import Link from "next/link";

export default function Category({ category, slug }) {
  return (
    <Link href="" className={styles.category}>
      {category}
    </Link>
  );
}
