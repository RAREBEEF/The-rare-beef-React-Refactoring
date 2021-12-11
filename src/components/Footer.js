import classNames from "classnames";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={classNames(styles["container"])}>
      <div className={classNames(styles["copyright"])}>
        © 2021.{" "}
        <span className={classNames(styles["author--neon"])}>RAREBEEF</span> All
        Rights Reserved.{" "}
      </div>
    </div>
  );
}
