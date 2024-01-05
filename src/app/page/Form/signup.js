"use client";
import React from "react";
import { useContext } from "react";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";
import { Form, Input, Button, message, notification, Alert } from "antd";
import jwtAxios from "../../utils/Apis";
import axios from "axios";
import successHandler from "../../utils/successHandler";
import errorHandler from "../../utils/errorHandler";
import { DataContext } from "../../store/GlobalState";

const signup = () => {
  const router = useRouter();
  const { state } = useContext(DataContext) || {};
  const { auth } = state || {};
  const [ip, setIP] = useState();
  const [loading, setLoading] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      values.ipDetail = ip;
      const response = await jwtAxios.post("auth/register", values);
      setLoading(false);
      successHandler(response);
      response ? setIsEmail(true) : setIsEmail(false);
    } catch (error) {
      errorHandler(error);
      setLoading(false);
    }
  };

  // useEffect(async () => {
  //   const res = await axios.get("https://geolocation-db.com/json/");
  //   setIP(res.data);
  // }, []);

  // useEffect(() => {
  //   if (Object.keys(auth).length !== 0) router.push("/");
  // }, [auth]);

  return (
    <div className="form-container sign-up-container">
      <Form
        onFinish={handleSubmit}
        onFinishFailed={(e) =>
          e.errorFields.map((p) => message.error(p.errors[0]))
        }
        layout="vertical"
      >
        {" "}
        <span
          className="pe-cursor left-login-icon p-0 mr-4 mb-2 align-self-baseline"
          onClick={() => router.push("/")}
        >
          <i className={"fa fa-arrow-left"} aria-hidden="true"></i>
        </span>
        <h1 className="mb-3">Create Account</h1>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>
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
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              min: 6,
              message: "password should be greater than 6 character",
            },
          ]}
          validateTrigger="onBlur"
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item
          name="cf_password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            {
              min: 6,
              message: "password should be greater than 6 character",
            },

            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
          validateTrigger="onBlur"
        >
          <Input.Password placeholder="confirm password" />
        </Form.Item>
        <Button
          className="mt-3"
          type="primary"
          htmlType="submit"
          loading={loading}
        >
          Register
        </Button>
        <div className="mt-3">
          {isEmail && (
            <Alert
              message="An Email with account activation link sent, Please check you inbox to proceed further!"
              type="info"
            />
          )}
        </div>
      </Form>
    </div>
  );
};

export default signup;
