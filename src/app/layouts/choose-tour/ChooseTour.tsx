import styles from "./ChooseTour.module.scss";

import SectionTitle from "@/app/shared/ui/section-title/SectionTitle";
import ChooseTourList from "./_components/choose-tour__list/ChooseTourList";

import {menuItems} from "./_utils/data";

export default function ChooseTour() {
  return (
    <section
      className={`${styles["choose-tour"]} container`}
      id="choose-tour-id"
    >
      <SectionTitle className={styles["choose-tour__heading"]}>
        Выбери свой тур
      </SectionTitle>
      <ChooseTourList items={menuItems} />
    </section>
  );
}
