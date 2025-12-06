import styles from "./ChooseTour.module.scss";

import SectionTitle from "@/app/shared/ui/section-title/SectionTitle";
import ChooseTourList from "./_components/choose-tour__list/ChooseTourList";

import {menuItems, cardsInfo} from "./_utils/data";
import ChooseTourCard from "./_components/ChooseTourCard/ChooseTourCard";
import CardButton from "@/app/shared/ui/CardButton/CardButton";

export default function ChooseTour() {
const cardClassNames = [
 "choose-tour__card-button",
  "choose-tour__button-arrow",
];

console.log(cardClassNames)
  return (
    <section
      className={`${styles["choose-tour"]} container`}
      id="choose-tour-id"
    >
      <SectionTitle className={styles["choose-tour__heading"]}>
        Выбери свой тур
      </SectionTitle>
      <ChooseTourList items={menuItems} />
      <ul className={styles["choose-tour__cards"]}>
        {cardsInfo.map((item, index) => {
          return (
            <ChooseTourCard
              key={index}
              title={item.title}
              price={item.price}
              imageSrc={item.imageSrc}
              alt={item.alt}
            >
              <CardButton classNames={cardClassNames} />
            </ChooseTourCard>
          );
        })}
      </ul>
    </section>
  );
}
