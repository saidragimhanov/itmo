import axios from "axios";
import { fetchNewsData } from "./NewsReducer";

export const fetchAsyncNews = (currentPage) => {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:4000/news?_page=${currentPage}&_per_page=9`,
    );
    dispatch(fetchNewsData(response.data));
  };
};
