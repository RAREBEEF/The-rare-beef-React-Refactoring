import classNames from "classnames";
import styles from "./CubeCenter.module.scss";
import gsap from "gsap";
import { useCallback, useState } from "react";

export default function CubeCenter() {
  ////////////////////
  // 마우스 클릭 이벤트 //
  ///////////////////
  const [lastX, setLastX] = useState(25);
  const [lastY, setLastY] = useState(-25);

  const dragStart = useCallback(
    (e) => {
      e.stopPropagation();
      let isClick = true;
      let clickX = 0;
      let clickY = 0;

      let moveX = 0;
      let moveY = 0;

      clickX = e.screenX;
      clickY = e.screenY;
      window.addEventListener("mousemove", (e) => {
        if (isClick) {
          const nowX = e.screenX;
          const nowY = e.screenY;

          moveX = lastY + clickY - nowY;
          moveY = lastX - clickX + nowX;

          console.log(`X 회전각 : ${moveX}
Y 회전각 : ${moveY}`);

          gsap.to(`.${styles["cube"]}`, 0, {
            transform: `rotateX(${moveX}deg) rotateY(${moveY}deg)`,
          });
        }
      });

      window.addEventListener(
        "mouseup",
        (e) => {
          if (isClick) {
            setLastX(moveX);
            setLastY(moveY);
            isClick = false;
          }
        },
        { once: true }
      );
    },
    [lastX, lastY]
  );

  const touchDragStart = useCallback(
    (e) => {
      e.stopPropagation();
      let isTouch = true;
      let clickX = 0;
      let clickY = 0;

      let moveX = 0;
      let moveY = 0;

      clickX = e.targetTouches[0].screenX;
      clickY = e.targetTouches[0].screenY;

      window.addEventListener("touchmove", (e) => {
        if (isTouch) {
          const nowX = e.targetTouches[0].screenX;
          const nowY = e.targetTouches[0].screenY;

          moveX = lastX - clickX + nowX;
          moveY = lastY + clickY - nowY;

          console.log(`X 회전각 : ${moveX}
Y 회전각 : ${moveY}`);

          gsap.to(`.${styles["cube"]}`, 0, {
            transform: `rotateX(${moveY}deg) rotateY(${moveX}deg)`,
          });
        }
      });

      window.addEventListener(
        "touchend",
        (e) => {
          if (isTouch) {
            setLastX(moveX);
            setLastY(moveY);
            isTouch = false;
          }
        },
        { once: true }
      );
    },
    [lastX, lastY]
  );

  return (
    <div className={classNames(styles["container"])}>
      <div
        className={classNames(styles["cube"])}
        onMouseDown={dragStart}
        onTouchStart={touchDragStart}
      >
        <div className={classNames(styles["face"], styles["front"])}></div>
        <div className={classNames(styles["face"], styles["back"])}></div>
        <div className={classNames(styles["face"], styles["top"])}></div>
        <div className={classNames(styles["face"], styles["bottom"])}></div>
        <div className={classNames(styles["face"], styles["left"])}></div>
        <div className={classNames(styles["face"], styles["right"])}></div>
      </div>
      <div className={classNames(styles["control-line"])}>
        <p>· Development in progress · Please visit this cube next time ·</p>
      </div>
    </div>
  );
}
