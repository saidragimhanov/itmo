const { createStore } = require("redux");

const defaultState = {
  data: [],
  currentPage: 1,
  loading: true,
  error: null,
  maxPages: null,
};
export const setFetchNews = "setFetchNews";
export const changeCurrentPage = "changeCurrentPage";

export const NewsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "setFetchNews":
      return {
        ...state,
        error: null,
        loading: false,
        data: action.payload.data,
        maxPages: action.payload.pages,
      };

    case "changeCurrentPage":
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};
export const fetchNewsData = (payload) => {
  return {
    type: setFetchNews,
    payload,
  };
};
export const changePage = (newPage) => {
  return {
    type: changeCurrentPage,
    payload: newPage,
  };
};
