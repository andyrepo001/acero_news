import Advertisement from "@/components/advertisement/advertisement";
import Container from "@/components/container/container";
import FeaturedNews from "@/components/news-cards/featured-news/featured-news";
import FrontNews from "@/components/news-cards/front-news/front-news";
import RegularNews from "@/components/news-cards/regular-news/regular-news";
import NewsWithImage from "@/components/news-with-image/news-with-image";
import Title from "@/components/title/title";
import HotNews from "@/components/hot-news/hot-news";
import Topics from "@/components/topic-news/topic-news";
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

          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap="1rem"
            padding="0 var(--padding)"
          >
            {articles?.map((article, index) => {
              return <NewsWithImage key={index} article={article} />;
            })}
          </Grid>
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap="var(--gap)"
            padding="0 var(--padding)"
          >
            {articles?.map((article, index) => {
              return <RegularNews key={index} noDate news={article} />;
            })}
          </Grid>
        </GridItem>
        <GridItem>
          <Box padding="0 var(--padding)">
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
              <Topics title="আলোচিত" articles={trendingArticles} />
              {/* Hot this week */}
              <Box>
                <HotNews articles={recentArticles} />
                <Advertisement />
              </Box>
            </Grid>
          </Box>
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
                <Box marginTop="calc(var(--margin) * 2)">
                  <Title title={menu?.name} />
                </Box>
                <Grid
                  templateColumns={{ base: "1fr", md: "3fr 1fr" }}
                  gap="var(--gap)"
                >
                  <GridItem>
                    <Grid
                      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                      gap="calc(var(--gap) * 2)"
                    >
                      {recentArticles
                        ?.filter((art) => art?.category_slug === menu?.slug)
                        ?.map((article, index) => (
                          <FeaturedNews
                            key={index}
                            withArticle
                            article={article}
                          />
                        ))}
                    </Grid>
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
