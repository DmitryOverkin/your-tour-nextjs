"use client";

import {useState} from "react";
import styles from "./ChooseTourList.module.scss";

interface IMenuItem {
  label: string;
}

type TProps = {
  items: IMenuItem[];
};

export default function ChooseTourList({items}: TProps) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <ul className={styles["choose-tour__list"]}>
      {items.map((item, idx) => {
        return (
          <li key={item.label}>
            <button
              onClick={() => setActive(idx)}
              className={`${styles["choose-tour__button"]} ${
                active === idx ? styles["choose-tour__button_active"] : ""
              }`}
            >
              {item.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
