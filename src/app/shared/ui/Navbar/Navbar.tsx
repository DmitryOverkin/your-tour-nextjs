"use client";

import styles from "./Navbar.module.scss";
import {useEffect, useState} from "react";

interface INavItem {
  label: string;
  href: string;
}

type TProps = {
  items: INavItem[];
  color?: string;
  fontSize?: string;
};

export default function Navbar({items, color, fontSize}: TProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 450) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles["header__nav"]} style={{color, fontSize}}>
      <ul className={styles["header__nav-list"]}>
        {items.map((item) => (
          <li key={item.href}>
            <a
              className={`${styles["header__nav-link"]} ${
                scrolled ? styles["header__nav-link--scroll"] : ""
              }`}
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
