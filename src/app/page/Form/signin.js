import React, { useState } from "react";
import { useContext, useEffect } from "react";
import Cookie from "js-cookie";
// import { useRouter } from "next/router";
import { Form, Input, notification, Button } from "antd";
import jwtAxios, { setAuthToken } from "../../utils/Apis";
import successHandler from "../../utils/successHandler";
import errorHandler from "../../utils/errorHandler";
const signin = ({ setShow }) => {
  const DataContext = {};
  const cds = useContext(DataContext);
  // const { auth } = state;
  // const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const response = await jwtAxios.post("auth/login", values);
      dispatch({
        type: "AUTH",
        payload: {
          token: response.data.result.token,
          user: response.data.result.admin,
        },
      });
      setLoading(false);
      setAuthToken(response.data.result.token);
      Cookie.set("token", response.data.result.token);
      Cookie.set("userInfo", JSON.stringify(response.data.result.admin));
      if (router.query && router.query.from) {
        router.push(router.query.from);
      } else {
        router.push("/portfolio");
      }
      successHandler(response);
    } catch (error) {
      errorHandler(error);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (Object.keys(auth).length !== 0) router.push("/");
  // }, [auth]);
  return (
    <div className="form-container sign-in-container">
      <Form onFinish={handleSubmit} layout="">
        <span
          className="pe-cursor p-0  mr-4 mb-2 left-login-icon align-self-baseline"
          onClick={() => router.push("/")}
        >
          <i className={"fa fa-arrow-left"} aria-hidden="true"></i>
        </span>
        <h1 className="mb-2">Sign in</h1>

        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name={"password"}>
          <Input.Password placeholder="passowrd" />
        </Form.Item>
        <Button
          type="primary"
          className="mt-2"
          htmlType="submit"
          loading={loading}
        >
          Sign In
        </Button>

        <br></br>
        <div className="flex">
          <p className="m-1">If you Don't have an account</p>
          <Button type="primary" className="mt-2" onClick={() => setShow(1)}>
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default signin;
