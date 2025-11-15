"use client";

import Logo from "@/app/shared/ui/logo/Logo";
import styles from "./Header.module.scss";
import Navbar from "@/app/shared/ui/Navbar/Navbar";
import PhoneNumber from "@/app/shared/ui/phone-number/PhoneNumber";
import {useEffect, useState} from "react";
import SectionTitle from "@/app/shared/ui/section-title/SectionTitle";
import SectionPharagraph from "@/app/shared/ui/section-pharagraph/SectionPharagraph";
import PrimaryButton from "@/app/shared/ui/primary-button/PrimaryButton";

export default function Header() {
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
  const navItems = [
    {label: "Туры", href: "#choose-tour"},
    {label: "Создать тур", href: "#take-tour"},
    {label: "Отзывы", href: "#review"},
    {label: "Истории", href: "#histories"},
  ];
  return (
    <header className={styles.header}>
      <div
        className={`${styles["header__content"]} ${
          scrolled ? styles["header_scroll"] : ""
        }`}
      >
        <section className={styles["header__container"]}>
          <Logo />
          <Navbar items={navItems} color="#fff" fontSize="20px" />
          <PhoneNumber number="+7 999 999 99 99" />
        </section>
      </div>
      <div className="container">
        <div className={styles["header__text"]}>
          <SectionTitle className={styles["header__heading"]}>
            Идеальные путешествия существуют
          </SectionTitle>
          <SectionPharagraph className={styles["header__description"]}>
            Идейные соображения высшего порядка, а также рамки и место обучения
            кадров
          </SectionPharagraph>
          <PrimaryButton>Найти тур</PrimaryButton>
        </div>
      </div>
    </header>
  );
}
