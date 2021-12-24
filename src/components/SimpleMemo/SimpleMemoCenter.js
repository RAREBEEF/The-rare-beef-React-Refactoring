import classNames from "classnames";
import styles from "./SimpleMemoCenter.module.scss";
import pcImg from "../../images/simplememo.png";
import iphoneImg from "../../images/simplememo-iphone.png";
import Button from "../Button";

export default function SimpleMemoCenter() {
  return (
    <div className={classNames(styles["container"])} id="top-btn-trigger">
      <div className={classNames(styles["img-card__wrapper"])}>
        <div
          className={classNames(styles["img-card__front"], styles["img-card"])}
        >
          <img
            className={styles["simplememo-pc-img"]}
            src={pcImg}
            alt="Simple Memo PC Screenshot"
          />
        </div>
        <div
          className={classNames(styles["img-card__back"], styles["img-card"])}
        >
          <img
            className={styles["simplememo-phone-img"]}
            src={iphoneImg}
            alt="Simple Memo iPhone Screenshot"
          />
          <div className={classNames(styles["btn-group"])}>
            <Button
              text="Simple Memo"
              href="https://simplememo.netlify.app"
              simpleMemo
            />
            <Button
              text="Github"
              href="https://github.com/RAREBEEF/Simple-Memo"
              simpleMemo
            />
          </div>
        </div>
      </div>
    </div>
  );
}
