import {PropsWithChildren} from "react";
import styles from "./ChooseTourCard.module.scss";

type TCardData = PropsWithChildren<{
  title: string;
  price: number;
  imageSrc: string;
  alt: string;
}>;

const ChooseTourCard = (props: TCardData) => {
  return (
    <li className={styles["choose-tour__card"]}>
      <img
        className={styles["choose-tour__card-img"]}
        src={props.imageSrc}
        alt={props.alt}
      />
      <div className={styles["choose-tour__card-content"]}>
        <div className={styles["choose-tour__card-text"]}>
          <h3 className={styles["choose-tour__card-heading"]}>{props.title}</h3>
          <p className={styles["choose-tour__card-price"]}>
            от {props.price} руб
          </p>
        </div>
      </div>
      {props.children}
    </li>
  );
};

export default ChooseTourCard;
