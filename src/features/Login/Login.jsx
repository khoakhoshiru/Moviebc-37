import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { loginAction } from "./redux/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async values => {
    //call service api
    console.log(values);
    try {
      await dispatch(loginAction(values));
      return navigate("/");
    } catch (err) {
      console.error();
    }
    // trả về thông tin user login thành công => res.data.content

    // set localStorage
    // get localStrage khi cần sử dụng
    // chuyen user sang trang home
  };

  return (
    <div className="container text-center">
      <h1>Login</h1>

      <div className=" flex justify-center pt-5">
        <Form name="basic" onFinish={handleLogin}>
          <Form.Item
            label="Tài khoản"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Hãy nhập tài khoản !",
              },
              // {
              //   pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              //   message: "Email không hợp lệ"
              // }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Hãy nhập mật khẩu !",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
