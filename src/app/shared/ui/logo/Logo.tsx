"use client";

import styles from "./Logo.module.scss";

import Image from "next/image";
import {useEffect, useState} from "react";

export default function Logo() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 450) {
        setScrolled(true);
      } else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <a href="#">
      <Image
        src={`${
          !scrolled ? "/header/logo/logo.svg" : "/header/logo/logo_black.svg"
        }`}
        alt="Logo"
        className={styles.logo}
        width={182}
        height={31}
        loading="eager"
      ></Image>
    </a>
  );
}
