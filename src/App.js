import classNames from "classnames";
import styles from "./App.module.scss";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Center from "./components/Center";
import Footer from "./components/Footer";

function App() {
  // 모바일 주소창 고려한 vh 정의
  const [vh, setVh] = React.useState(window.innerHeight * 0.01);
  useEffect(() => {
    const resize = () => {
      setVh(window.innerHeight * 0.01);
    };
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  });
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  return (
    <div
      className={classNames(styles["container"])}
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      <Header />
      <Center />
      <Footer />
    </div>
  );
}

export default App;
