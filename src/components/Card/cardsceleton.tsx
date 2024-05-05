import Sceleton from "../../UI/Sceleton/sceleton";
import s from "./cardsceton.module.css";
export default function CardSceleton() {
  return (
    <div className={s.wrapper}>
      <Sceleton className={s.image} />
      <Sceleton className={s.title} />
      <Sceleton className={s.text} />
      <Sceleton className={s.button} />
    </div>
  );
}
