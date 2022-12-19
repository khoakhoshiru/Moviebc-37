import React from "react";
import { Col, Row, Card, Button, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesAction } from "../redux/action";
import { Link } from "react-router-dom";

const MovieList = () => {
  const movies = useSelector((state) => state.booking.movies);
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-5xl font-normal">Danh sách phim</h1>
      <Row gutter={30}>
        {movies.items?.map((item) => (
          <Col className="mb-7" key={item.maPhim} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{
                width: "100%",
                height: "100%",
              }}
              cover={
                <img
                  className="h-72 object-cover object-left-top"
                  alt="example"
                  src={item.hinhAnh}
                />
              }
            >
              <h1 className=" text-3xl my-2 font-semibold h-20">
                {item.tenPhim}
              </h1>
              <p className="text-2xl my-2 h-36">
                {item.moTa.substr(0, 100) + "..."}
              </p>
              <Link to={`/detail/${item.maPhim}`}>
                <Button type="primary" size="large">
                  Đặt vé
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>

      {movies.items && (
        <Pagination
          defaultCurrent={movies.currentPage}
          total={movies.totalCount}
          pageSize={4}
          onChange={(page) => {
            dispatch(fetchMoviesAction(page));
          }}
        />
      )}
    </div>
  );
};

export default MovieList;
