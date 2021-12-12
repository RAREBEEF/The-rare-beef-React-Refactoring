import classNames from "classnames";
import { useCallback, useState } from "react";
import switchImg from "../switch.svg";
import styles from "./Header.module.scss";

export default function Header({ lightOn, setLightOn }) {
  const [switchActive, setSwitchActive] = useState(false);

  const timer = useCallback(() => {
    setTimeout(() => {
      setSwitchActive(false);
    }, 600);
  }, []);

  const switchClick = useCallback(() => {
    setSwitchActive(true);
    setLightOn(!lightOn);
    timer();
  }, [timer, lightOn, setLightOn]);

  return (
    <div className={classNames(styles["container"])}>
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
      <img
        src={switchImg}
        alt="Switch"
        className={classNames(
          styles["switch"],
          switchActive && styles["active"]
        )}
        onClick={switchClick}
      />
    </div>
  );
}
