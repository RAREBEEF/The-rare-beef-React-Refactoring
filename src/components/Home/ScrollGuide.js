import classNames from "classnames";
import styles from "./ScrollGuide.module.scss";

export default function ScrollGuide({ firstClick, lightOn }) {
  return (
    <div
      className={classNames(
        styles["container"],
        firstClick && lightOn && styles["clicked"]
      )}
    >
      <div className={classNames(styles["guide"], styles["guide-text"])}>
        Scroll down
      </div>
      <i
        className={classNames(
          "fas fa-chevron-down fa-xs",
          styles["guide"],
          styles["guide-icon"]
        )}
      ></i>
    </div>
  );
}
