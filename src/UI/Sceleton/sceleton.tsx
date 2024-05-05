import cn from "classnames";
import { FC } from "react";
import s from "./sceleton.module.css";
interface SceletonProps {
  className?: string;
}

const Sceleton: FC<SceletonProps> = (props) => {
  const { className } = props;

  return <span className={cn(s.loading, className)}></span>;
};

export default Sceleton;
