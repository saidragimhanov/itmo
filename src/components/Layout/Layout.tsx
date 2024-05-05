import { Container } from "@/UI/Container/Container";
import { FC, ReactNode } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import s from "./layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <div className={s.container}>
        <Container>{children}</Container>
      </div>
      <Footer />
    </div>
  );
};
