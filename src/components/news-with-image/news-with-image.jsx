"use client";
import styles from "./news-with-image.module.css";
import Image from "next/image";
import RegularNews from "../news-cards/regular-news/regular-news";
import { useRef } from "react";
import { useIntersection } from "@/hooks/use-intersection";

export default function NewsWithImage({ article }) {
  const item = useRef();
  const { intersecting } = useIntersection(item);

  return (
    <section
      ref={item}
      className={`${styles.news_with_image} ${
        intersecting ? styles.animate : ""
      }`}
    >
      <RegularNews borderless noDate news={article} />
      <figure className={styles.image_wrapper}>
        <Image
          src={article?.article_image}
          alt=""
          fill
          className={styles.image}
        />
      </figure>
    </section>
  );
}
