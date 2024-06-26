import styles from "./topic-news.module.css";
import FeaturedNews from "../news-cards/featured-news/featured-news";
import RegularNews from "../news-cards/regular-news/regular-news";
import Title from "../title/title";

export default function Topics({ title, articles }) {
  return (
    <aside className={styles.news_wrapper}>
      <Title secondaryTitle={title} />
      <FeaturedNews article={articles && articles[0]} />
      {articles &&
        articles?.slice(1, 10)?.map((article, index) => {
          return <RegularNews key={index} noDate news={article} />;
        })}
    </aside>
  );
}
