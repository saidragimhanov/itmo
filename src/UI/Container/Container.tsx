import cn from "classnames";
import { FC, ReactNode } from "react";
import s from "./container.module.css";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
export const Container: FC<ContainerProps> = (props) => {
  const { children, className } = props;
  return <div className={cn(s.wrapper, className)}>{children}</div>;
};
