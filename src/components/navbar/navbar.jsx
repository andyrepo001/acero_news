"use client";
import styles from "./navbar.module.css";
import {
  Cloud,
  Facebook,
  Instagram,
  Search,
  Twitter,
  User,
  Youtube,
} from "lucide-react";
import { usePosition } from "@/hooks/get-current-position";
import Link from "next/link";
import Container from "../container/container";
import Icon from "../icon/icon";
import Logo from "../logo/logo";
import Button from "../button/button";
import { getData } from "../../hooks/server-api";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Navbar() {
  const params = useParams();
  const [retrievedData, setRetrievedData] = useState();
  const { currentPosition } = usePosition();

  useEffect(() => {
    const get = async () => {
      const data = await getData(`menus/${params?.lan}`);
      setRetrievedData(data);
    };

    get();
  }, [params?.lan]);

  return (
    <nav
      className={`${styles.navbar} ${
        currentPosition > 100 ? styles.fixed_bar : ""
      }`}
    >
      <Container>
        <div
          className={`${styles.wrapper} ${
            currentPosition > 100 ? styles.center : ""
          }`}
        >
          {/* Logo - weather */}
          {/* <div className={styles.logo_wrapper}>
            <Logo currentPos={currentPosition} />
            <div
              className={`${styles.date_weather} ${
                currentPosition > 100 ? styles.hidden : ""
              }`}
            >
              <span className={styles.date}>Saturday, June 1, 2024</span>
              <div className={styles.weather}>
                <Icon icon={Cloud} />
                <span>
                  9.5 <sup className={styles.super}>c</sup> dhaka
                </span>
              </div>
            </div>
          </div> */}
          {/* Other content */}
          <div className={styles.others}>
            {/* Pages list */}
            <div
              className={`${styles.pages_wrapper} ${
                currentPosition > 100 ? styles.hidden : ""
              }`}
            >
              <Logo />
              <div className={styles.pages}>
                {retrievedData?.header_menu?.menus?.map((menu, index) => (
                  <Link
                    href={"/" + params?.lan + menu.slug}
                    className={styles.page_link}
                    key={index}
                  >
                    {menu.name}
                  </Link>
                ))}
                {/* <div role="button" aria-label="login or register">
                <Icon icon={User} iconSize={22} />
              </div>
              <div role="button" aria-label="search for news">
                <Icon icon={Search} iconSize={22} />
              </div> */}

                {/* Social icons */}
                <div className={styles.socials}>
                  <Link href="" target="_blank">
                    <Icon icon={Facebook} iconSize={14} />
                  </Link>
                  <Link href="" target="_blank">
                    <Icon icon={Instagram} iconSize={14} />
                  </Link>
                  <Link href="" target="_blank">
                    <Icon icon={Twitter} iconSize={14} />
                  </Link>
                  <Link href="" target="_blank">
                    <Icon icon={Youtube} iconSize={14} />
                  </Link>
                </div>
                {/* <Link href={`${params?.lan === "bn" ? "/en" : "/bn"}`}>
                  <Button
                    label={`${params?.lan === "bn" ? "english" : "bangla"}`}
                  />
                </Link> */}
              </div>
            </div>

            {/* News categories */}
            <div className={styles.news}>
              {retrievedData?.category_menu?.menus?.map((item, index) => (
                <Link href={"/" + params?.lan + "/" + item.slug} key={index}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
