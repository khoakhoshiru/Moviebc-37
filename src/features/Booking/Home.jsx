import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeCarousel from "./components/HomeCarousel";
import MovieList from "./components/MovieList";
import { ScheduleMovie } from "./components/ScheduleMovie";
import { fetchBannersAction, fetchCinemasAction, fetchMoviesAction } from "./redux/action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // set data store banner
    dispatch(fetchBannersAction);
    // set data store danh sach phim
    dispatch(fetchMoviesAction());

    // set data store danh sach he thong rap
    dispatch(fetchCinemasAction);
  }, []);

  return (
    <div>
      <HomeCarousel />
      <MovieList />
      <ScheduleMovie />
    </div>
  );

  // khi load trang home , call api
  // 1. lấy ds banner
};

export default Home;
