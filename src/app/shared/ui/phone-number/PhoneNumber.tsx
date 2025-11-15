"use client";

import {useState, useEffect} from "react";
import styles from "./PhoneNumber.module.scss";

interface IProps {
  number: string;
}

export default function PhoneNumber({number}: IProps) {
  const [scrolled, setScrolled] = useState(false);
  const href = `tel:${number}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 450);
      console.log("work");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={href}
      className={`${styles["header__contact-link"]} ${
        scrolled ? styles["header__contact-link--scroll"] : ""
      }`}
    >
      {number}
    </a>
  );
}
