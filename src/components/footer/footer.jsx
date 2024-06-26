"use client";
import styles from "./footer.module.css";
import { getData } from "../../hooks/server-api";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Container from "../container/container";
import Logo from "../logo/logo";
import Title from "../title/title";

export default function Footer() {
  const params = useParams();
  const [retrievedData, setRetrievedData] = useState();

  useEffect(() => {
    const get = async () => {
      const data = await getData(`menus/${params?.lan}`);
      setRetrievedData(data);
    };

    get();
  }, [params?.lan]);

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_content}>
          {/* Header  */}
          <div className={styles.footer_header}>
            <Logo />
            <div className={styles.page_links}>
              {retrievedData?.header_menu?.menus?.map((menu, index) => (
                <Link href={menu?.slug} key={index}>
                  {menu?.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className={styles.footer_main}>
            <div className={styles.col}>
              <p>
                Acero News - Where voices unite, stories flourish, and community
                thrives through open dialogue and meaningful connections.
              </p>
            </div>

            {/* Footer menus */}
            {retrievedData?.footer_menu?.menus?.map((menu, index) => (
              <div className={styles.col} key={index}>
                <Title secondaryTitle={menu?.name} secondaryColor="inherit" />

                {/* Sub menu render */}
                <div className={styles.sub_menus}>
                  {menu?.sub_menu?.map((sub, index) => (
                    <Link href={"/" + params?.lan + sub?.slug} key={index}>
                      {sub?.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
