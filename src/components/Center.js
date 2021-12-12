import classNames from "classnames";
import styles from "./Center.module.scss";
import logoImg from "../beef.svg";
import shadowImg from "../shadow.svg";
import keyImg from "../key.svg";
import { useCallback, useState } from "react";
import Tooltip from "./Tooltip";
// import Modal from "./Modal";

export default function Center({ lightOn, vh }) {
  const [logoActive, setLogoActive] = useState(false);
  const [tooltipActive, setTooltipActive] = useState(false);

  const logoClick = useCallback(() => {
    setLogoActive(!logoActive);
  }, [logoActive]);

  const keyClick = useCallback(() => {
    setTooltipActive(!tooltipActive);
  }, [tooltipActive]);

  // const tooltipClose = useCallback(() => {
  //   setTooltipActive(false);
  // }, []);

  logoActive && !lightOn && setLogoActive(false);
  tooltipActive && !logoActive && setTooltipActive(false);

  return (
    <div
      className={classNames(styles["container"], lightOn && styles["light-on"])}
      // onClick={tooltipClose}
    >
      <div className={classNames(styles["logo"])}>
        <img
          src={logoImg}
          alt="Beef"
          className={classNames(styles["beef"], logoActive && styles["active"])}
          id="beef"
          onClick={logoClick}
        />
        <img
          src={keyImg}
          alt="Key"
          className={classNames(styles["key"])}
          id="key"
          onClick={keyClick}
        />
        <img
          src={shadowImg}
          alt="Shadow"
          className={classNames(styles["shadow"])}
        />
      </div>
      {/* {modalActive && <Modal vh={vh} setModalActive={setModalActive} />} */}
      <Tooltip tooltipActive={tooltipActive} logoActive={logoActive} />
    </div>
  );
}
