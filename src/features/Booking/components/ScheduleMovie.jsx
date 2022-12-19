// rafc
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Tabs } from "antd";
import { getScheduleMovieCinema } from "../utils/bookService";
import { useEffect } from "react";
//formik
export const ScheduleMovie = () => {
  const [listSchedule, setListSchedule] = useState([]);

  //danh sách hệ thống rạp
  // []
  const cinemas = useSelector(state => state.booking.cinemas);

  //chay mot lan dau tien khi component render
  useEffect(() => {
    getScheduleMovieCinema(cinemas[0]?.maHeThongRap).then(res =>
      setListSchedule(res.data.content)
    );
  }, [cinemas]);

  return (
    <div className="container ">
      <Tabs
        onChange={key => {
          getScheduleMovieCinema(key).then(res =>
            setListSchedule(res.data.content)
          );
        }}
        tabPosition="left"
        items={cinemas.map(itemRap => {
          return {
            label: <img className="w-24" src={itemRap.logo} />,
            key: itemRap.maHeThongRap,
            children:
              listSchedule.length > 0 &&
              listSchedule[0].lstCumRap.map(itemCumRap => {
                return (
                  <p>
                    {itemCumRap.tenCumRap}
                    <br />
                    {itemCumRap.diaChi}
                  </p>
                );
              }),
          };
        })}
      />
    </div>
  );
};
