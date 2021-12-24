import classNames from "classnames";
import styles from "./HomeFooter.module.scss";

export default function HomeFooter({ lightOn }) {
  return (
    <div className={classNames(styles["container"])}>
      <div className={classNames(styles["copyright"])}>
        © 2021.{" "}
        <span
          className={classNames(
            styles["neon"],
            styles["copyright__neon"],
            lightOn && styles["neon--active"]
          )}
        >
          RAREBEEF
        </span>{" "}
        All Rights Reserved.{" "}
      </div>
    </div>
  );
}
