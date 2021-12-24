import React, { useCallback } from "react";
import styles from "./ToTop.module.scss";
import classNames from "classnames";
import ScrollMagic from "scrollmagic";

export default function Btn({ lightOn }) {
  React.useEffect(() => {
    const topBtnEl = document.querySelector("#btn--to-top");
    const topBtnTriggerEl = document.querySelector("#top-btn-trigger");
    new ScrollMagic.Scene({
      triggerElement: topBtnTriggerEl,
      triggerHook: 0.8,
    })
      .setClassToggle(topBtnEl, styles["show"])
      .addTo(new ScrollMagic.Controller());
  }, []);

  const toTop = useCallback(() => {
    document.querySelector("#main-container").scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      className={classNames(styles["container"], lightOn && styles["light-on"])}
    >
      <a
        href="https://velog.io/@drrobot409"
        target="_blank"
        rel="noreferrer"
        className={classNames(
          styles["btn"],
          styles["btn--to-velog"],
          styles["show"]
        )}
      >
        <i className="fab fa-vimeo fa-2x"></i>
      </a>
      <a
        href="https://github.com/RAREBEEF"
        target="_blank"
        rel="noreferrer"
        className={classNames(
          styles["btn"],
          styles["btn--to-git"],
          styles["show"]
        )}
      >
        <i className="fab fa-github-square fa-2x"></i>
      </a>
      <div
        className={classNames(styles["btn"], styles["btn--to-top"])}
        id="btn--to-top"
        onClick={toTop}
      >
        <i className="far fa-caret-square-up fa-2x"></i>
      </div>
    </div>
  );
}
