import FrontNews from "@/components/news-cards/front-news/front-news";
import styles from "./category-view.module.css";
import Container from "@/components/container/container";
import FeaturedNews from "@/components/news-cards/featured-news/featured-news";
import Advertisement from "@/components/advertisement/advertisement";
import Title from "@/components/title/title";
import ErrorView from "../error-view/error-view";
import HotNews from "@/components/hot-news/hot-news";
import { getData } from "@/hooks/server-api";

export default async function CategoryView({
  articles,
  pageTitle,
  category_slug,
}) {
  const track = await getData(`track/category/${category_slug}`);
  if (!articles) return <ErrorView />;

  return (
    <Container>
      <div className={styles.section_wrapper}>
        <div className={styles.recent_title}>
          <Title title={pageTitle?.category_name} />
        </div>
        <div className={styles.recent_section}>
          <div>
            <div className={`${styles.recent_news} `}>
              {articles?.map((article, index) => (
                <FeaturedNews withArticle key={index} article={article} />
              ))}
            </div>
          </div>
          <HotNews articles={articles} />
        </div>
      </div>
    </Container>
  );
}
