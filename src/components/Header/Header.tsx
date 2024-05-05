import { Container } from "@/UI/Container";
import { availableLanguages } from "@/constants/locales";
import cn from "classnames";
import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import s from "./header.module.css";
interface HeaderProps { }

export const Header: FC<HeaderProps> = () => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;

  const togleLanguageEng = () => {
    if (currentLanguage === availableLanguages.ru) {
      i18n.changeLanguage(availableLanguages.en);
    }
  };
  const togleLanguageRu = () => {
    if (currentLanguage === availableLanguages.en) {
      i18n.changeLanguage(availableLanguages.ru);
    }
  };

  return (
    <header className={s.header}>
      <Container className={s.wrapper}>
        <Link className={s.logo} href="#">
          {t("logo")}
        </Link>
        <span>
          <button
            onClick={togleLanguageRu}
            type="button"
            className={cn("btn  btn-sm", {
              "btn-primary": currentLanguage === availableLanguages.ru,
              "btn-secondary": currentLanguage !== availableLanguages.ru,
            })}
          >
            {" "}
            ru
          </button>
          <button
            onClick={togleLanguageEng}
            type="button"
            className={cn("btn  btn-sm", {
              "btn-primary": currentLanguage === availableLanguages.en,
              "btn-secondary": currentLanguage !== availableLanguages.en,
            })}
          >
            eng
          </button>
        </span>
      </Container>
    </header>
  );
};
