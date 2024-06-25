"use client";
import styles from "./front-news.module.css";
import Image from "next/image";
import front_img from "@/assets/front-news.jpg";
import Link from "next/link";
import Title from "@/components/title/title";
import { useIntersection } from "@/hooks/use-intersection";
import { useRef } from "react";
import { useParams } from "next/navigation";
import Category from "@/components/category/category";
import SectionWrapper from "@/components/section-wrapper/section-wrapper";

export default function FrontNews({ article }) {
  const item = useRef();
  const { intersecting } = useIntersection(item);
  const params = useParams();

  const date = new Date(article?.article_published_date).toDateString();

  const time = new Date(article?.article_published_date)
    .toLocaleString()
    .split(",")[1];

  return (
    <article
      ref={item}
      className={`${styles.front_news} ${intersecting ? styles.animate : ""}`}
      title={article?.article_name}
    >
      <div className={styles.wrapper}>
        <div className={styles.image_wrapper}>
          <Image
            src={article?.article_image}
            alt=""
            className={styles.image}
            quality={50}
            fill
          />
        </div>
        <SectionWrapper>
          <section className={styles.article_details}>
            <header>
              <h2 className={styles.headline}>
                <Link
                  href={`${
                    "/" +
                    params?.lan +
                    "/" +
                    article?.category_name +
                    "/" +
                    article?.article_slug
                  }`}
                >
                  <Title title={article?.article_name} />
                </Link>
              </h2>
              <div className={styles.author_cat}>
                <Category category={article?.category_name} />
                <span>
                  <Link href="">বাণিজ্য ডেস্ক</Link> - {date + "," + time}
                </span>
              </div>
            </header>
            <span className={styles.article}>{article?.article_summary}</span>
          </section>
        </SectionWrapper>
      </div>
    </article>
  );
}
