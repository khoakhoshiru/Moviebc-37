import AppRoute from "app/AppRoute";
import Header from "components/Header";
import { Booking } from "features/Booking/Booking";
import MovieDetail from "features/Booking/Detail";
import Home from "features/Booking/Home";
import Login from "features/Login/Login";
import { fetchProfileAction } from "features/Login/redux/action";
import Signup from "features/Login/Signup";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfileAction);
    //dispatch async action fetch profile
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
        <Route
          path="/booking"
          element={<AppRoute component={Booking} isPrivate />}
        />
        <Route path="/login" element={<AppRoute component={Login} isAuth />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
