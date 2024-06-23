import styles from "./page.module.css";
import { Clock } from "lucide-react";
import { getData } from "@/hooks/server-api";
import { decode } from "html-entities";
import Image from "next/image";
import Link from "next/link";
import demo from "@/assets/front-news.jpg";
import Container from "@/components/container/container";
import Title from "@/components/title/title";
import HotNews from "@/components/hot-news/hot-news";
import Topics from "@/components/topic-news/topic-news";
import Icon from "@/components/icon/icon";
import Category from "@/components/category/category";
import SectionWrapper from "@/components/section-wrapper/section-wrapper";

export default async function Article({ params }) {
  let data = await getData(`article/${params?.lan}/${params.slug}`);
  const articles = await getData(
    `category/${params?.lan}/${params?.id}/articles`
  );
  const track = await getData(`track/article/${params?.slug}`);

  const decoded = decode(data?.article_content);

  return (
    <>
      <Container>
        <div className={styles.page}>
          <div className={styles.main}>
            <figure className={styles.image_wrapper}>
              <Image
                src={data?.article_image}
                alt=""
                fill
                className={styles.image}
              />
            </figure>
            <SectionWrapper>
              <div className={styles.content}>
                {/* Category - Title */}
                <div className={styles.category_title}>
                  <Category category={data?.category_name} />
                  <div className={styles.time}>
                    <Icon icon={Clock} />
                    <span>2 min. read</span>
                  </div>
                  <Title title={data?.article_name} />
                </div>

                {/* Author - Date - Social */}
                <div className={styles.author_date_social}>
                  <div className={styles.author_date}>
                    <div className={styles.author}>
                      <figure className={styles.author_image_wrapper}>
                        <Image
                          className={styles.author_image}
                          src={demo}
                          alt=""
                          fill
                        />
                      </figure>
                      <span className={styles.author_name}>
                        by
                        <Link href="">
                          <b> {data?.author_name}</b>
                        </Link>
                      </span>
                    </div>
                    <p className={styles.date}>
                      {data?.article_published_date}
                    </p>
                  </div>
                  {/* Social links */}
                  <div className={styles.socials}></div>
                </div>

                {/* Main article */}
                <article className={styles.text_content}>
                  <div dangerouslySetInnerHTML={{ __html: decoded }}></div>
                </article>

                {/* End of content */}
              </div>
            </SectionWrapper>
          </div>
          <div className={styles.main}>
            <SectionWrapper>
              <HotNews articles={articles} />
              <Topics title="আসর" articles={articles} />
            </SectionWrapper>
          </div>
        </div>
      </Container>
    </>
  );
}
