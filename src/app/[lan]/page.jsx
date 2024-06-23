import styles from "./page.module.css";
import Advertisement from "@/components/advertisement/advertisement";
import Container from "@/components/container/container";
import FeaturedNews from "@/components/news-cards/featured-news/featured-news";
import FrontNews from "@/components/news-cards/front-news/front-news";
import RegularNews from "@/components/news-cards/regular-news/regular-news";
import NewsWithImage from "@/components/news-with-image/news-with-image";
import Section from "@/components/section/section";
import Title from "@/components/title/title";
import HotNews from "@/components/hot-news/hot-news";
import Topics from "@/components/topic-news/topic-news";
import SectionWrapper from "@/components/section-wrapper/section-wrapper";
import { getData } from "@/hooks/server-api";

export default async function Home({ params }) {
  const articles = await getData(`category/${params?.lan}/bangladesh/articles`);
  const recentArticles = await getData(`recent_news/${params?.lan}`);
  const trendingArticles = await getData(`trending_news/${params?.lan}`);
  const featuredArticles = await getData(`featured_news/${params?.lan}`);
  const data = await getData(`menus/${params?.lan}/category_menu`);

  return (
    <Container>
      <div className={styles.content}>
        <div>
          <FrontNews article={featuredArticles && featuredArticles[0]} />
          <SectionWrapper>
            <div className={styles.image_news_wrapper}>
              {articles?.map((article, index) => {
                return <NewsWithImage key={index} article={article} />;
              })}
            </div>

            <Section>
              {articles?.map((article, index) => {
                return <RegularNews key={index} noDate news={article} />;
              })}
            </Section>
          </SectionWrapper>
        </div>
        <SectionWrapper>
          <Section>
            <Topics title="আলোচিত" articles={trendingArticles} />
            {/* Hot this week */}
            <div>
              <HotNews articles={recentArticles} />
              <Advertisement />
            </div>
          </Section>
        </SectionWrapper>
      </div>
      {/* Recent news */}

      {data?.category_menu?.menus?.map((menu, index) => (
        <>
          {recentArticles?.filter((art) => art?.category_slug === menu?.slug)
            .length > 0 && (
            <SectionWrapper key={index}>
              <div className={styles.recent_title}>
                <Title title={menu?.name} />
              </div>
              <div className={styles.recent_section}>
                <div>
                  <div className={`${styles.recent_news} `}>
                    {recentArticles
                      ?.filter((art) => art?.category_slug === menu?.slug)
                      ?.map((article, index) => (
                        <FeaturedNews
                          key={index}
                          withArticle
                          article={article}
                        />
                      ))}
                  </div>
                </div>
                <Advertisement />
              </div>
            </SectionWrapper>
          )}
        </>
      ))}
    </Container>
  );
}
