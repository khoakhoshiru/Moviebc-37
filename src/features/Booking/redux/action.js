import requester from "app/api";
import { apiPath } from "app/apiPath";
import actions from "./type";

//get api heThongRap
export const fetchCinemasAction = async (next) => {
  try {
    const res = await requester({
      method: "GET",
      url: apiPath.CINEMAS
    });
    next({
      type: actions.SET_CINEMAS,
      payload: res.data.content
    })
  }
  catch(err) {  }
}


export const fetchBannersAction = async (next) => {
  try {
    const res = await requester({
      method: "GET",
      url: apiPath.BANNERS,
    });

    next({
      type: actions.SET_BANNERS,
      payload: res.data.content,
    });
  } catch (err) { }
};

export const fetchMoviesAction = (page = 1) => {
  return async (next) => {
    try {
      const res = await requester({
        url: apiPath.MOVIES,
        method: "GET",
        params: {
          maNhom: "GP10",
          soTrang: page,
          soPhanTuTrenTrang: 4,
        },
      });

      next({
        type: actions.SET_MOVIES,
        payload: res.data.content,
      });
    } catch (err) { }
  };
};

//closure function
export const fetchMovieDetailAction = (id) => {
  return async (next) => {
    try {
      const res = await requester({
        url: apiPath.MOVIE_DETAIL,
        method: "GET",
        params: {
          MaPhim: id,
        },
      });
      next({
        type: actions.SET_MOVIE_DETAIL,
        payload: res.data.content,
      });
    } catch (err) { }
  };
};

//get detail movie with schedule
export const fetchMovieDetailScheduleAction = (id) => {
  return async (next) => {
    try {
      const res = await requester({
        url: apiPath.MOVIE_DETAIL_SCHEDULE,
        method: "GET",
        params: {
          MaPhim: id,
        },
      });
      next({
        type: actions.SET_MOVIE_DETAIL_SCHEDULE,
        payload: res.data.content,
      });
    } catch (err) { }
  };
};
