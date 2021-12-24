import classNames from "classnames";
import styles from "./App.module.scss";
import React, { useEffect, useState } from "react";
import Page from "./components/Page";
import ToTop from "./components/ToTop";
import ScrollGuide from "./components/Home/ScrollGuide";
import Header from "./components/Header";
import HomeCenter from "./components/Home/HomeCenter";
import SimpleMemoCenter from "./components/SimpleMemo/SimpleMemoCenter";
import CubeCenter from "./components/Cube/CubeCenter";
// import SimpleMemoApp from "./components/SimpleMemoApp/App";

function App() {
  const [vh, setVh] = React.useState(window.innerHeight * 0.01);
  useEffect(() => {
    const resize = () => {
      setVh(window.innerHeight * 0.01);
    };
    window.addEventListener("resize", resize);
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  const [firstClick, setFirstClick] = useState(false);
  const [lightOn, setLightOn] = useState(false);

  return (
    <div
      className={classNames(styles["container"], lightOn && styles["light-on"])}
      id="main-container"
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      <Page home lightOn={lightOn}>
        <Header home lightOn={lightOn} setLightOn={setLightOn} />
        <HomeCenter lightOn={lightOn} setFirstClick={setFirstClick} />
        <ScrollGuide firstClick={firstClick} lightOn={lightOn} />
      </Page>
      <Page simpleMemo>
        <Header simpleMemo title="Simple Memo" />
        <SimpleMemoCenter />
      </Page>
      <Page cube>
        <CubeCenter />
      </Page>
      <ToTop lightOn={lightOn} />
    </div>
  );
}

export default App;
