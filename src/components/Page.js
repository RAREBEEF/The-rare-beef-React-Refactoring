import classNames from "classnames";
import styles from "./Page.module.scss";

export default function Page({ children, lightOn, home }) {
  return (
    <div
      className={classNames(
        styles["container"],
        home && styles["home"],
        lightOn && styles["light-on"]
      )}
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      {children}
    </div>
  );
}
