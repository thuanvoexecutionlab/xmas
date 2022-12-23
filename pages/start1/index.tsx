import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Start.module.css";
import Title from "../../components/Title";
import ImageApp from "../../components/Image";
import Xmas from "../../components/Xmas";

export interface IAboutPageProps {}

export default function StartPage(props: IAboutPageProps) {
  const [num, setNum] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prev) => prev - 1);
    }, 30);
    if (num === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [num]);

  return (
    <div>
      <Head>
        <title>Xmas Gift</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {(num > 0 && <Title title={"" + num} />) || <Xmas />}
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
