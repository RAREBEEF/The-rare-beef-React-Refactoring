import classNames from "classnames";
import styles from "./Center.module.scss";
import logoImg from "../beef.svg";
import shadowImg from "../shadow.svg";
import keyImg from "../key.svg";
import { useCallback, useState } from "react";

export default function Center() {
  const [logoActive, setLogoActive] = useState(false);
  const logoClick = useCallback(() => {
    setLogoActive(!logoActive);
  }, [logoActive]);

  return (
    <div className={classNames(styles["container"])}>
      <div className={classNames(styles["logo"])}>
        <img
          src={logoImg}
          alt="Beef"
          className={classNames(styles["beef"], logoActive && styles["active"])}
          onClick={logoClick}
        />
        <img src={keyImg} alt="Key" className={classNames(styles["key"])} />
        <img
          src={shadowImg}
          alt="Shadow"
          className={classNames(styles["shadow"])}
        />
      </div>
    </div>
  );
}
