import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";
import { useRouter } from "next/router";
import Link from "next/link";
import { postData } from "../../utils/fetchData";
import { Button, notification } from "antd";
import jwtAxios from "../../utils/Apis";
import successHandler from "../../utils/successHandler";
import errorHandler from "../../utils/errorHandler";

const Activation = () => {
  const router = useRouter();
  const token = router.query.token;

  const handleSubmit = async (values) => {
    try {
      const response = await jwtAxios.post("auth/activation", {
        token: values,
      });
      if (response.data.success == true) {
        successHandler(response);

        router.push({
          pathname: "/signPage",
        });
      } else {
      successHandler(response);
      }
    } catch (error) {
      errorHandler(error);
    }
  };
  return (
    <div className="theme-color login-form form-container">
      <Head>
        <title>Fynd Me</title>
      </Head>
      <div className="forgot-container d-flex justify-content-center ">
        <form className=" w-100">
          <h2 className="mb-16 mb-4">
            To complete the registration process, click on the button below
          </h2>
          <Button className="ghost mt-2" onClick={() => handleSubmit(token)}>
            Activate your Account
          </Button>
        </form>
      </div>
    </div>
  );
};
export default Activation;
