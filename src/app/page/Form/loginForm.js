"use client";
import React, { useState } from "react";
import Head from "next/head";
import Signin from "./signin";
import Signup from "./signup";

import { FormDesign } from "../../auth/index.style";

export default function loginForm() {
  const [show, setShow] = useState(0);

  // useEffect(() => {
  //   if (router.query.sign == "login") {
  //     setShow(0);
  //   } else if (router.query.sign == "signup") {
  //     setShow(1);
  //   } else {
  //     setShow(0);
  //   }
  // }, [router]);
  // const onForgetFinish = async (values) => {
  //   try {
  //     const res = await jwtAxios.put("/auth/forgetPassword", values);
  //     successHandler(res);
  //     if (res.data.success) {
  //       setShow(3);
  //       setUserData(res.data.result);
  //     }
  //   } catch (error) {
  //     errorHandler(error);
  //   }
  // };
  // const ForgotPassword = () => {
  //   return (
  //     <div className=" forgot-container d-flex justify-content-center ">
  //       <div className="form-container w-100">
  //         <Form action="#" onFinish={onForgetFinish}>
  //           <span
  //             className="pe-cursor p-0  mr-4 mb-4 left-login-icon align-self-baseline"
  //             onClick={() => setShow(0)}
  //           >
  //             <i className={"fa fa-arrow-left"} aria-hidden="true"></i>
  //           </span>
  //           <h2 className="mb-3">Forgot Password</h2>
  //           <span className="m-r-auto mb-2">Enter Your Email</span>
  //           <Form.Item
  //             name="email"
  //             rules={[
  //               {
  //                 type: "email",
  //                 message: "The input is not valid E-mail!",
  //               },
  //               {
  //                 required: true,
  //                 message: "Please input your E-mail!",
  //               },
  //             ]}
  //           >
  //             <Input placeholder="Email" />
  //           </Form.Item>

  //           <Button className="mt-3" type="primary" htmlType="submit">
  //             Continue
  //           </Button>
  //         </Form>
  //       </div>
  //     </div>
  //   );
  // };
  // const VerifyOtp = () => {
  //   return (
  //     <div className=" forgot-container container-set-reset d-flex justify-content-center ">
  //       <div className="form-container w-100">
  //         <Form
  //           action="#"
  //           onFinish={async (values) => {
  //             try {
  //               const res = await jwtAxios.put(
  //                 `/auth/verifyOTP/${userData?._id}`,
  //                 values
  //               );
  //               successHandler(res);
  //               setShow(4);
  //               if (res.data.success) {
  //               }
  //             } catch (error) {
  //               errorHandler(error);
  //             }
  //           }}
  //         >
  //           <span
  //             className="pe-cursor p-0  mr-4 mb-2 left-login-icon align-self-baseline"
  //             onClick={() => setShow(2)}
  //           >
  //             <i className={"fa fa-arrow-left"} aria-hidden="true"></i>
  //           </span>
  //           <h2 className="mb-3">Verify OTP</h2>
  //           <span className=" mb-2 text-center">
  //             Code is sent to <b>{userData?.email}</b>
  //           </span>

  //           <div id="divOuter">
  //             <div id="divInner">
  //               <Form.Item name="otp">
  //                 <InputNumber id="partitioned" type="text" maxLength={4} />
  //               </Form.Item>
  //             </div>
  //           </div>

  //           <span className="mb-0">
  //             Didn’t receive code?
  //             <a
  //               href="#"
  //               style={{ marginLeft: "5px" }}
  //               className=" text-primary"
  //               onClick={() => onForgetFinish({ email: userData?.email })}
  //             >
  //               Request Again
  //             </a>
  //           </span>
  //           <Button className="mt-4" type="primary" htmlType="submit">
  //             Verify OTP
  //           </Button>
  //         </Form>
  //       </div>
  //     </div>
  //   );
  // };
  // const ResetPassword = () => {
  //   return (
  //     <div className=" forgot-container container-set-reset d-flex justify-content-center ">
  //       <div className="form-container w-100">
  //         <Form
  //           action="#"
  //           onFinish={async (values) => {
  //             try {
  //               const res = await jwtAxios.put(
  //                 `/auth/resetPassword/${userData?._id}`,
  //                 values
  //               );
  //               successHandler(res);
  //               if (res.data.success) {
  //                 setShow(0);
  //                 setUserData(res.data.result);
  //               }
  //             } catch (error) {
  //               errorHandler(error);
  //             }
  //           }}
  //         >
  //           <span
  //             className="pe-cursor p-0  mr-4 mb-2 left-login-icon align-self-baseline"
  //             onClick={() => setShow(2)}
  //           >
  //             <i className={"fa fa-arrow-left"} aria-hidden="true"></i>
  //           </span>
  //           <h2 className="mb-3">Reset Password</h2>
  //           <span className="m-r-auto mb-2 text-center">
  //             Set the new password for your account
  //           </span>
  //           <Form.Item
  //             name="password"
  //             rules={[
  //               {
  //                 required: true,
  //                 message: "Please input your New password!",
  //               },
  //               {
  //                 min: 6,
  //                 message: "password should be greater than 6 character",
  //               },
  //             ]}
  //             validateTrigger="onBlur"
  //           >
  //             <Input.Password placeholder="Password" />
  //           </Form.Item>
  //           <Form.Item
  //             name="confirmPassword"
  //             dependencies={["password"]}
  //             hasFeedback
  //             rules={[
  //               {
  //                 required: true,
  //                 message: "Please confirm your password!",
  //               },
  //               {
  //                 min: 6,
  //                 message: "password should be greater than 6 character",
  //               },

  //               ({ getFieldValue }) => ({
  //                 validator(_, value) {
  //                   if (!value || getFieldValue("password") === value) {
  //                     return Promise.resolve();
  //                   }
  //                   return Promise.reject(
  //                     new Error(
  //                       "The two passwords that you entered do not match!"
  //                     )
  //                   );
  //                 },
  //               }),
  //             ]}
  //             validateTrigger="onBlur"
  //           >
  //             <Input.Password placeholder="confirm password" />
  //           </Form.Item>
  //           <Button className="mt-3" type="primary" htmlType="submit">
  //             Reset Password
  //           </Button>
  //         </Form>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <>
      <Head>
        <title>Backlink</title>
      </Head>
      <FormDesign>
        {show == 1 && <Signup setShow={setShow} />}
        {show == 0 && <Signin setShow={setShow} />}
      </FormDesign>

      {/* {show == 2 && <ForgotPassword />}
      {show == 3 && <VerifyOtp />}
      {show == 4 && <ResetPassword />} */}
      <></>
    </>
  );
}
