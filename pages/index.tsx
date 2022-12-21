import { NextSeo } from "next-seo";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <NextSeo
        title="Merry Xmas"
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
