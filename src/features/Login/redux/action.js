import requester from "app/api";
import actions from "./type";

export const loginAction = userLogin => {
  return async next => {
    try {
      const res = await requester({
        method: "POST",
        url: "/api/QuanLyNguoiDung/DangNhap",
        data: userLogin,
      });
      next({
        type: actions.SET_PROFILE,
        payload: res.data.content,
      });
      localStorage.setItem("token", res.data.content.accessToken);

      console.log(res.data.content);
    } catch (error) {
      throw error;
    }
  };
};
export const fetchProfileAction = async next => {
  try {
    const res = await requester({
      method: "POST",
      url: "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    next({
      type: actions.SET_PROFILE,
      payload: res.data.content,
    });
  } catch (err) {
    console.log(err);
  }
};
