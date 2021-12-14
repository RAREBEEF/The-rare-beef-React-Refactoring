import styles from "./Tooltip.module.scss";
import classNames from "classnames";
import velog from "../images/velog.png";
import github from "../images/github.png";
export default function Tooltip({ tooltipActive, logoActive }) {
  return (
    <div
      className={classNames(
        styles["container"],
        logoActive && tooltipActive && styles["active"]
      )}
      id="tooltip"
    >
      <div className={classNames(styles["tooltip-arrow"])}></div>
      <div className={classNames(styles["tooltip-content"])}>
        <a
          href="https://velog.io/@drrobot409"
          className={classNames(styles["link--velog"])}
          target="_blank"
          rel="noreferrer"
        >
          <img src={velog} alt="Velog" />
        </a>
        <a
          href="https://github.com/RAREBEEF"
          className={classNames(styles["link--github"])}
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="Github" />
        </a>
      </div>
    </div>
  );
}
