import classNames from "classnames";
import styles from "./App.module.scss";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Center from "./components/Center";
import Footer from "./components/Footer";

function App() {
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

  const [lightOn, setLightOn] = useState(false);

  return (
    <div
      className={classNames(styles["container"], lightOn && styles["light-on"])}
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      <Header lightOn={lightOn} setLightOn={setLightOn} />
      <Center lightOn={lightOn} setLightOn={setLightOn} />
      <Footer lightOn={lightOn} setLightOn={setLightOn} />
    </div>
  );
}

export default App;
