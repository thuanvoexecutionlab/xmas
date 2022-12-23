import * as React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useRouter } from "next/router";
import styles from "./Xmas.module.css";

export interface IXmasProps {}

const wishes = [
  "Bạn biết không?",
  "Tôi không biết bạn là ai",
  "Tôi đã chuẩn bị món quà này cho bạn",
  "Mong bạn sẽ thấy nó đặc biệt 🤣",
  "Vì đây thật sự chưa phải là món quà mà tôi muốn tặng bạn",
  "Thật ra tôi muốn tặng bạn một cái gì đó khác",
  "Đố bạn biết? 🤔",
  "Đoán đi đã...",
  "Đoán ra chưa?",
  "Sai rồi ❌",
  "Thôi không nhây nữa",
  "Chắc phải cho bạn biết nó là gì rồi 😅",
  "Nó là...",
  "À mà quên",
  "Trước khi tôi nói ra nó là gì",
  "Thì tôi muốn nói một câu",
  "Noel ấm áp bợn nhớ 😃",
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
      route.push("/gift1");
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
