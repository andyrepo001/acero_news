"use client";
import styles from "./featured-news.module.css";
import { useIntersection } from "@/hooks/use-intersection";
import { useRef } from "react";
import { decode } from "html-entities";
import Image from "next/image";
import Link from "next/link";
import Category from "@/components/category/category";
import { useParams } from "next/navigation";

export default function FeaturedNews({ withArticle, article }) {
  const item = useRef();
  const params = useParams();
  const { intersecting } = useIntersection(item);

  const decoded = decode(article?.article_summary);

  return (
    <article
      ref={item}
      className={`${intersecting ? styles.animate : ""} ${
        styles.featured_news
      }`}
    >
      <div className={styles.wrapper} title={article?.article_name}>
        <figure className={styles.image_wrapper}>
          <Image
            src={article?.article_image}
            alt=""
            fill
            className={styles.image}
          />
        </figure>
        <div className={!withArticle ? styles.article_details : ""}>
          <header>
            <h3 className={styles.headline}>
              <Link
                href={`${
                  "/" +
                  params?.lan +
                  "/" +
                  article?.category_slug +
                  "/" +
                  article?.article_slug
                }`}
              >
                {article?.article_name}
              </Link>
            </h3>
            <div className={styles.cat_date}>
              <Category category={article?.category_name} />
              <span>{article?.article_published_date}</span>
            </div>
          </header>
          {withArticle && (
            <span
              className={styles.article}
              dangerouslySetInnerHTML={{ __html: decoded }}
            ></span>
          )}
        </div>
      </div>
    </article>
  );
}
