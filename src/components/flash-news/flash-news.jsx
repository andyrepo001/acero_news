"use client";
import styles from "./flash-news.module.css";
import { getData } from "@/hooks/server-api";
import { useEffect, useState } from "react";
import { ArrowBigRightDash } from "lucide-react";
import Icon from "../icon/icon";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function FlashNews() {
  const params = useParams();
  const [recentArticels, setRecentArticles] = useState(null);

  useEffect(() => {
    const getFlashNews = async () => {
      const res = await getData(`recent_news/${params?.lan}`);

      setRecentArticles(res);
    };

    getFlashNews();
  }, [params?.lan]);

  return (
    <div className={styles.flash_wrapper}>
      <div className={styles.shell}>
        <div className={styles.news_wrapper}>
          {recentArticels?.map((article, i) => (
            <Link
              key={i}
              href={`${
                "/" +
                params?.lan +
                "/" +
                article?.category_slug +
                "/" +
                article?.article_slug
              }`}
            >
              <h6 className={styles.headline}>
                <Icon icon={ArrowBigRightDash} />
                {article.article_name}
              </h6>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
