import Link from "next/link";
import { FC } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import s from "./card.module.css";
import { useTranslation } from "react-i18next";

export interface CardProps {
  title: string;
  text: string;
  img: string;
  id: number;
}


const CardNews: FC<CardProps> = ({ title, id, img, text }) => {
  const { i18n, t } = useTranslation();

  return (
    <Link className={s.wrapper} href={`/news/${id}`}>
      <Card style={{ height: "100%", width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className={s.title}>{title.substr(0, 90)}...</Card.Title>
          <Card.Text className={s.text}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">{t('card_button')}</Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default CardNews;
