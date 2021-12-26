import classNames from "classnames";
import React, { useCallback, useState } from "react";
import switchImg from "../images/switch.svg";
import styles from "./Header.module.scss";
import lightOnMp3 from "../audios/light-on.mp3";
import lightOffMp3 from "../audios/light-off.mp3";

export default function Header({
  lightOn,
  setLightOn,
  title,
  home,
  simpleMemo,
  cube,
}) {
  const [switchActive, setSwitchActive] = useState(false);
  const [lightOnSound] = useState(new Audio(lightOnMp3));
  const [lightOffSound] = useState(new Audio(lightOffMp3));

  const timer = useCallback(() => {
    setTimeout(() => {
      setSwitchActive(false);
    }, 600);
  }, []);

  const switchClick = useCallback(() => {
    setSwitchActive(true);
    setLightOn(!lightOn);
    lightOn ? lightOffSound.play() : lightOnSound.play();
    timer();
  }, [timer, lightOn, setLightOn, lightOnSound, lightOffSound]);

  return (
    <div
      className={classNames(
        styles["container"],
        home && styles["home"],
        simpleMemo && styles["simplememo"],
        cube && styles["cube"]
      )}
    >
      {home ? (
        <h1 className={classNames(styles["title"])}>
          <span className={classNames(styles["title__no-neon"])}>The </span>
          <span
            className={classNames(
              styles["neon"],
              styles["title__neon"],
              lightOn && styles["neon--active"]
            )}
          >
            rare beef
          </span>
        </h1>
      ) : (
        <h1 className={classNames(styles["title"])}>{title}</h1>
      )}

      <div className={classNames(styles["author"])}>
        By{" "}
        <span
          className={classNames(
            styles["neon"],
            styles["author__neon"],
            lightOn && styles["neon--active"]
          )}
        >
          RAREBEEF
        </span>
      </div>

      {home && (
        <img
          src={switchImg}
          alt="Switch"
          className={classNames(
            styles["switch"],
            switchActive && styles["active"]
          )}
          onClick={switchClick}
        />
      )}
    </div>
  );
}
