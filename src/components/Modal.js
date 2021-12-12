import classNames from "classnames";
import velog from "../velog.png";
import github from "../github.png";
import styles from "./Modal.module.scss";
import { useCallback } from "react";

export default function Modal({ vh, setModalActive }) {
  const closeModal = useCallback(() => {
    setModalActive(false);
  }, [setModalActive]);

  return (
    <div className={classNames(styles["container"])}>
      <div
        className={classNames(styles["modal__overlay"])}
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
        onClick={closeModal}
      ></div>
      <div className={classNames(styles["modal__window"])}>
        <div className={classNames(styles["header"])}>
          <div className={classNames(styles["title"])}>Link</div>
          <div className={classNames(styles["close"])} onClick={closeModal}>
            X
          </div>
        </div>
        <div className={classNames(styles["content"])}>
          <a href="velog.io" className={classNames(styles["link--velog"])}>
            <img src={velog} alt="Velog" />
          </a>
          <a href="github.com" className={classNames(styles["link--github"])}>
            <img src={github} alt="Github" />
          </a>
        </div>
      </div>
    </div>
  );
}
