import classNames from "classnames";
import styles from "./HomeCenter.module.scss";
import logoImg from "../../images/beef.svg";
import shadowImg from "../../images/shadow.svg";
import keyImg from "../../images/key.svg";
import { useCallback, useState } from "react";
import KeyTooltip from "./KeyTooltip";

export default function HomeCenter({ lightOn, setFirstClick }) {
  const [logoActive, setLogoActive] = useState(false);
  const [tooltipActive, setTooltipActive] = useState(false);

  const logoClick = useCallback(() => {
    setLogoActive(!logoActive);
    setFirstClick(true);
  }, [logoActive, setFirstClick]);

  const keyClick = useCallback(() => {
    setTooltipActive(!tooltipActive);
  }, [tooltipActive]);

  logoActive && !lightOn && setLogoActive(false);
  tooltipActive && !logoActive && setTooltipActive(false);

  return (
    <div
      className={classNames(styles["container"], lightOn && styles["light-on"])}
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
          className={classNames(
            styles["key"],
            tooltipActive && styles["clicked"]
          )}
          id="key"
          onClick={keyClick}
        />
        <img
          src={shadowImg}
          alt="Shadow"
          className={classNames(styles["shadow"])}
        />
      </div>
      <KeyTooltip tooltipActive={tooltipActive} logoActive={logoActive} />
    </div>
  );
}
