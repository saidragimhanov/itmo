import { Layout } from "@/components/Layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncNews } from "../../Store/FetchAsyncNews";
import CardNews from "../../components/Card/cards";
import CardSceleton from "../../components/Card/cardsceleton";
import s from "./index.module.css";

export default function News() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.news.loading);
  const data = useSelector((state) => state.news.data);

  useEffect(() => {
    dispatch(fetchAsyncNews());
  }, []);

  return (
    <Layout>
      <div className={s.wrapper}>
        {loading ? (
          <>
            <CardSceleton />
            <CardSceleton />
            <CardSceleton />
            <CardSceleton />
            <CardSceleton />
            <CardSceleton />
            <CardSceleton />
            <CardSceleton />
          </>
        ) : (
          data.map((news) => {
            console.log(news);
            return (
              <CardNews
                key={news.id}
                title={news.title.substr()}
                text={news.text}
                img={news.image_small}
                id={news.id}
              />
            );
          })
        )}
      </div>
    </Layout>
  );
}
