"use client";
import Link from "next/link";
import styles from "./regular-news.module.css";
import { useRef } from "react";
import { useIntersection } from "@/hooks/use-intersection";
import { useParams } from "next/navigation";
import Category from "@/components/category/category";

export default function RegularNews({ news, id, borderless, noDate }) {
  const item = useRef();
  const params = useParams();
  const { intersecting } = useIntersection(item);

  return (
    <article
      ref={item}
      className={`${styles.reg_news} ${intersecting ? styles.animate : ""}`}
    >
      <header
        className={`${styles.wrapper} ${borderless ? styles.borderless : ""}`}
        title={news?.article_name}
      >
        {noDate && (
          <div style={{ marginBottom: `var(--margin)` }}>
            <Category category={news?.category_name} />
          </div>
        )}
        <h4 className={styles.headline}>
          <Link
            href={`${
              "/" +
              params?.lan +
              "/" +
              news?.category_slug +
              "/" +
              news?.article_slug
            }`}
          >
            {news?.article_name}
          </Link>
        </h4>
        {!noDate && (
          <div className={styles.date_cat}>
            <Category category={news?.category_name} />
            <span>০৩ জুন ২০২৪</span>
          </div>
        )}
        {id >= 0 && <span className={styles.news_count}>{id + 1}</span>}
      </header>
    </article>
  );
}
