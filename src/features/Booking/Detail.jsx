import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMovieDetailAction,
  fetchMovieDetailScheduleAction
} from "./redux/action";
import { Col, Row, Rate, Tag, Button, Modal, Tabs } from 'antd';
import moment from 'moment';

const MovieDetail = () => {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {

    setOpenModal(true);
  }

  const closeModal = () => {

    var iframe = document.querySelector('#video-trailer');

    if (iframe !== null) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }


    setOpenModal(false);
  }

  const params = useParams();
  const dispatch = useDispatch();

  const movieDetail = useSelector((state) => {
    // return state.booking.movieDetail
    return state.booking.movieDetailSchedule
  })

  // const movieDetail = useSelector( state => state.booking.movieDetail);

  console.log(movieDetail)

  useEffect(() => {
    const movieId = params.id;
    // dispatch(fetchMovieDetailAction(movieId));
    dispatch(fetchMovieDetailScheduleAction(movieId));
  }, [params]);

  let trailer = "";
  trailer = movieDetail && movieDetail.trailer.replace("watch?v=", "embed/");

  return (
    movieDetail && <div className="container mx-auto pt-10" >
      <Row>
        <Col span={8}>
          <img className="w-full" src={movieDetail.hinhAnh} alt="" />
        </Col>
        <Col className="pl-10" span={16}>
          <h1>{movieDetail.tenPhim}</h1>
          <p className="text-xl" >{movieDetail.moTa}</p>
          {/* 
              Ngày chiếu, đánh giá, hot, đang chiếu, sắp chiếu
          */}
          <table className="table-auto text-xl text-left border-spacing-5">
            <tbody>
              <tr>
                <th>Đáng giá:</th>
                <td> <Rate value={movieDetail.danhGia} count={10} /> </td>
              </tr>
              <tr>
                <th>
                  {movieDetail.dangChieu && <Tag color="magenta" > Đang chiếu </Tag>}
                  {movieDetail.sapChieu && <Tag color="blue" > Sắp chiếu </Tag>}
                </th>
              </tr>
              {/* npm i moment */}
              <tr>
                <th>Ngày chiếu:</th>
                <td> {moment(movieDetail.ngayKhoiChieu).format("DD/MM/yyyy")} </td>
              </tr>
              <tr>
                <td>
                  <Button className="mr-3" type="primary" size="large" onClick={() => showModal()}>
                    Xem trailer
                  </Button>

                  <Button type="primary" size="large">
                    Đặt vé
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>

          <Tabs
            tabPosition="left"
            items={
              movieDetail.heThongRapChieu.map(itemRap => {
                return {
                  label: <> <img className="w-24" src={itemRap.logo} /> <br /> {itemRap.tenHeThongRap} </>,
                  key: itemRap.maHeThongRap,
                  children: itemRap.cumRapChieu.map(itemCumRap => {
                    return <p className="text-lg text-green-700">
                      {itemCumRap.tenCumRap} ({itemCumRap.diaChi})
                      <p></p>

                      {itemCumRap.lichChieuPhim.map(itemChieu => {

                        return <Tag>{ moment(itemChieu.ngayChieuGioChieu).format("DD-MM-yyyy ~ hh:mm") }</Tag>

                      })}
                    </p>
                  })
                }
              })
            }
          />

        </Col>
      </Row>

      <Modal title="Trailer" open={openModal} onCancel={closeModal}
        width={800}
      >
        {/* nội dung modal */}
        <iframe
          id="video-trailer"
          width="100%"
          height="500px"
          src={trailer}

        ></iframe>
        {/* https://www.youtube.com/watch?v=KSFS0OfIK2c */}
      </Modal>
    </div>
  );
};

export default MovieDetail;
