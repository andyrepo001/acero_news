import { Box } from "@chakra-ui/react";
import RegularNews from "../news-cards/regular-news/regular-news";
import Title from "../title/title";

export default async function HotNews({ articles }) {
  return (
    <Box
      bgColor="#f1f4f7"
      padding="var(--padding)"
      marginBottom="var(--margin)"
      borderRadius="var(--radius)"
      height="fit-content"
    >
      <Title secondaryTitle="সর্বশেষ" secondaryColor="inherit" />
      {articles?.slice(0, 10)?.map((news, index) => (
        <RegularNews key={index} news={news} id={index} noDate />
      ))}
    </Box>
  );
}
