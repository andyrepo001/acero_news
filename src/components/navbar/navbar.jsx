"use client";
import styles from "./navbar.module.css";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { usePosition } from "@/hooks/get-current-position";
import Link from "next/link";
import Container from "../container/container";
import Icon from "../icon/icon";
import Logo from "../logo/logo";
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
                    href={"/" + params?.lan + "/" + menu.slug}
                    className={styles.page_link}
                    key={index}
                  >
                    {menu.name}
                  </Link>
                ))}

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
