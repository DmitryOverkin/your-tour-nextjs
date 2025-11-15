import styles from "./PrimaryButton.module.scss";

import React from "react";

interface Iprops {
  children: React.ReactNode;
}

export default function PrimaryButton({children}: Iprops) {
  return <button className={styles["header__btn"]}>{children}</button>;
}
