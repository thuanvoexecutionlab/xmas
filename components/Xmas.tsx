import * as React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useRouter } from "next/router";
import styles from "./Xmas.module.css";

export interface IXmasProps {}

const wishes = [
  "Bạn biết không?",
  "Tôi không biết bạn là ai",
  "Tôi đã chuẩn bị món quà hữu hình cho bạn",
  "Nhưng mà nó chưa được ship tới 😢",
  "Vì thế nên đây là món quà nhỏ của tôi",
  "Trong lúc bạn chờ đợi món kia đến",
  "À mà quên",
  "Noel vui vẻ nhớ 😃",
];

export default function Xmas() {
  const route = useRouter();
  const [index, setIndex] = React.useState(0);
  const [btn, setBtn] = React.useState("Next");
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  const handleChange = () => {
    if (index === wishes.length - 1) {
      route.push("/gift");
    }
    if (index === wishes.length - 2) {
      setBtn("Your gift 🎁");
    }
    setIndex((prev) => (prev + 1) % wishes.length);
    api.start({
      from: { opacity: 0 },
      to: { opacity: 1 },
    });
  };

  return (
    <div className={styles.main}>
      <animated.div className={styles.text} style={props}>
        {wishes[index]}
      </animated.div>
      <button className={styles.btn} type="button" onClick={handleChange}>
        {btn}
      </button>
    </div>
  );
}
