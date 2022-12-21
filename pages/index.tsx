import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <NextSeo
        title="Ryan App"
        description="Product Management"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://my-next-app-six-psi.vercel.app/",
          title: "Ryan App",
          description: "Product Management",
          images: [
            {
              url: "/avatar.png",
              width: 800,
              height: 600,
              alt: "Image Alt",
            },
            {
              url: "/avatar.png",
              width: 900,
              height: 800,
              alt: "Image Alt",
            },
          ],
          site_name: "Ryan App",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Merry <span>Christmas</span>
        </h1>

        <div className={styles.grid}>
          <Link
            href={{
              pathname: "/start",
            }}
            className={styles.card}
          >
            <h2>Your gift is here</h2>
          </Link>
        </div>
      </main>

      <Image
        src="/images/christmas-tree.png"
        alt="bg"
        className={styles.bg}
        width={500}
        height={500}
      />
    </div>
  );
}
