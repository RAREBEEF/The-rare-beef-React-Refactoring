import styles from "./Button.module.scss";
import classNames from "classnames";

export default function Button({ text, href, simpleMemo }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={classNames(
        styles["btn--link"],
        simpleMemo && styles["simplememo"]
      )}
    >
      {text}
    </a>
  );
}
