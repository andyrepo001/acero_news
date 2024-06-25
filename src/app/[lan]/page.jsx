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
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

export const metadata = {
  title: "Home | Acero News",
  description: "Acero news",
};

export default async function Home({ params }) {
  const articles = await getData(`category/${params?.lan}/bangladesh/articles`);
  const recentArticles = await getData(`recent_news/${params?.lan}`);
  const trendingArticles = await getData(`trending_news/${params?.lan}`);
  const featuredArticles = await getData(`featured_news/${params?.lan}`);
  const data = await getData(`menus/${params?.lan}/category_menu`);

  return (
    <Container>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="var(--gap)">
        <GridItem>
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
        </GridItem>
        <GridItem>
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
        </GridItem>
      </Grid>

      {/* Recent news */}
      <Box>
        {data?.category_menu?.menus?.map((menu, index) => (
          <>
            {recentArticles?.filter((art) => art?.category_slug === menu?.slug)
              .length > 0 && (
              <Flex
                direction="column"
                gap="var(--gap)"
                padding="0 var(--padding)"
              >
                <div className={styles.recent_title}>
                  <Title title={menu?.name} />
                </div>
                <Grid templateColumns={{ base: "1fr", md: "3fr 1fr" }}>
                  <GridItem>
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
                  </GridItem>
                  <GridItem>
                    <Advertisement />
                  </GridItem>
                </Grid>
              </Flex>
            )}
          </>
        ))}
      </Box>
    </Container>
  );
}
