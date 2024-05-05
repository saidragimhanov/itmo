const { default: axios } = require("axios");
const { useEffect } = require("react");
const { useState } = require("react");
export const Pagination = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:4000/news/")
      .then((response) => setNews(response.data));
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    console.log("scroll");
  };
};
return (
  <div className={"pagination_news"}>
    {news.map((news) => (
      <div>
        <div className="card"></div>
      </div>
    ))}
  </div>
);
