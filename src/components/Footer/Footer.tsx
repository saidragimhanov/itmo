import { Container } from "@/UI/Container/Container";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import s from "./footer.module.css";

interface FooterProps {}
export const Footer: FC<FooterProps> = () => {
  const { i18n, t } = useTranslation();

  return (
    <footer className={s.footer}>
      <Container className={s.wrapper}>{t("footer_logo")}</Container>
    </footer>
  );
};
