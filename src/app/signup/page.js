"use client";
import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input } from "antd";
export default function page() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const signup = async () => {
    try {
      await axios.post("/api/users/signup", user);
      alert("SIgnup");
      Router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        ></input>
      </div>
      <div>
        <label htmlFor="email">Username</label>
        <input
          id="email"
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
      </div>
      <div>
        <label htmlFor="password">Username</label>
        <input
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
      </div>
      <button onClick={signup}>ss</button>
    </div>
  );
}
