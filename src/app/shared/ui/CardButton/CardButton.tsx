import styles from "../../../layouts/choose-tour/_components/ChooseTourCard/ChooseTourCard.module.scss";

interface ICardButton {
  classNames: string[];
}

export default function CardButton({classNames}: ICardButton) {
  return (
    <button className={styles[classNames[0]]}>
      Подробнее <span className={styles[classNames[1]]}></span>
    </button>
  );
}
