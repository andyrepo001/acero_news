import styles from "./hot-news.module.css";
import RegularNews from "../news-cards/regular-news/regular-news";
import Title from "../title/title";

export default async function HotNews({ articles }) {
  return (
    <aside className={`${styles.hot_news} ${styles.news_wrapper}`}>
      <Title secondaryTitle="সর্বশেষ" secondaryColor="inherit" />
      {articles?.slice(0, 10)?.map((news, index) => (
        <RegularNews key={index} news={news} id={index} noDate />
      ))}
    </aside>
  );
}
