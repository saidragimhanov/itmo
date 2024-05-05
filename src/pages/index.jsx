import { fetchAsyncNews } from "@/Store/FetchAsyncNews";
import { changePage } from "@/Store/NewsReducer";
import CardNews from "@/components/Card/cards";
import CardSceleton from "@/components/Card/cardsceleton";
import { Layout } from "@/components/Layout/Layout";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import s from "./index.module.css";

export default function Home() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.news.loading);
  const data = useSelector((state) => state.news.data);
  const currentPage = useSelector((state) => state.news.currentPage);
  const maxPages = useSelector((state) => state.news.maxPages);

  const nextPage = () => {
    dispatch(changePage(currentPage + 1));
  };
  const prevPage = () => {
    dispatch(changePage(currentPage - 1));
  };

  useEffect(() => {
    dispatch(fetchAsyncNews(currentPage));
  }, [currentPage]);

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
            return (
              <CardNews
                key={news.id}
                title={news.title}
                text={news.text}
                img={news.image_small}
                id={news.id}
              />
            );
          })
        )}
      </div>
      <div className={s.buttons_wrapper}>
        <Button
          disabled={currentPage === 1}
          variant="danger"
          onClick={prevPage}
        >
          Предыдущая стр
        </Button>

        <Button
          disabled={currentPage >= maxPages}
          variant="success"
          onClick={() => nextPage()}
        >
          Следующая стр
        </Button>
      </div>
    </Layout>
  );
}
