import { getData } from "@/hooks/server-api";
import { Box, Grid } from "@chakra-ui/react";
import Container from "@/components/container/container";
import FeaturedNews from "@/components/news-cards/featured-news/featured-news";
import Title from "@/components/title/title";
import ErrorView from "../error-view/error-view";
import HotNews from "@/components/hot-news/hot-news";

export default async function CategoryView({
  articles,
  pageTitle,
  category_slug,
}) {
  const track = await getData(`track/category/${category_slug}`);
  if (!articles) return <ErrorView />;

  return (
    <Container>
      <Box padding="calc(var(--padding) * 2) 0" margin="0 var(--margin)">
        <Box margin="var(--margin) 0">
          <Title title={pageTitle?.category_name} />
        </Box>
        <Grid templateColumns={{ base: "1fr", md: "3fr 1fr" }} gap="var(--gap)">
          <Box>
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap={{
                base: "calc(var(--gap) * 4)",
                md: "calc(var(--gap) * 4) var(--gap)",
              }}
            >
              {articles?.map((article, index) => (
                <FeaturedNews withArticle key={index} article={article} />
              ))}
            </Grid>
          </Box>
          <HotNews articles={articles} />
        </Grid>
      </Box>
    </Container>
  );
}
