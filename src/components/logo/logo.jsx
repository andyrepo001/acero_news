"use client";
import Link from "next/link";
import styles from "./logo.module.css";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { useParams } from "next/navigation";

export default function Logo() {
  const params = useParams();

  return (
    <header className={styles.header}>
      <Link href={`/${params?.lan}`} className={styles.logo}>
        <Image src={logo} alt="" className={styles.logo_image} sizes="150px" />
      </Link>
      <span className={styles.beta}>beta</span>
    </header>
  );
}
