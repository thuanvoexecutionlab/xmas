import Head from "next/head";
import Image from "next/image";
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./Gift.module.css";
import Link from "next/link";
import { Facebook, Phone } from "react-feather";

export default function GiftPage() {
  const [props, api] = useSpring(
    () => ({
      from: { translateY: 100, opacity: 0 },
      to: { translateY: 0, opacity: 1 },
    }),
    []
  );

  return (
    <div>
      <Head>
        <title>Xmas Gift</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <animated.div className={styles.main} style={props}>
        <Image
          className={styles.img}
          src={"/images/gift1.png"}
          alt={""}
          width={300}
          height={300}
        />
        <h2 className={styles.text}>
          Tén tèn 🎉🎉🎉
          <br />
          <br />
          Vì lí do vận chuyển nên món qua của bạn đang bị vướng lại ở kho hàng
          <br /> Quà của bạn sẽ đến tận tay sớm nhất có thể nhá 💚
        </h2>
        {/* <footer className={styles.footer}>
          <Link
            className={styles.link}
            href="https://www.facebook.com/ryan.vo.0106/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
            <span>Ryan Võ(Minh Thuận)</span>
          </Link>
          <Link
            className={styles.link}
            href="tel: 0938 033 495"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Phone />
            <span>0938.033.495</span>
          </Link>
        </footer> */}
        <Image
          src="/images/christmas-tree.png"
          alt="bg"
          className={styles.bg}
          width={500}
          height={500}
        />
      </animated.div>
    </div>
  );
}
