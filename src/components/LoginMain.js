import React, { useState } from "react";
import Loading from "./Loading";
import { publicRequest } from "../request";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";

const LoginMain = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const loginUser = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (email === "" || password === "") {
      toast.error("Please Enter All Details");
      setLoading(false);
    } else {
      try {
        const res = await publicRequest.post("/users/login", {
          email,
          password,
        });
        console.log(res);
        if (res.data.isAdmin) {
          window.location = "http://localhost:3000/admin";
        } else {
          toast.error("Not Allowed");
        }
        setLoading(false);
        setEmail("");
        setPassword("");
      } catch (error) {
        toast.error(error.response.data.error);
        setLoading(false);
        console.log(error);
      }
    }
  };
  return (
    <div className={"main"}>
      {loading && <Loading />}
      <div className={"inner"}>
        <img src="/images/kwl1.png" alt="#" className={"loginimg"} />
        <h2 className={"logintitle"}>admin login</h2>
        <form className={"form"}>
          <div className={"inputs"}>
            <div className={"loginsvg"}>
              <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <UserIcon />
            </div>
            <label>Email</label>
          </div>
          <div className={"inputs"}>
            <div className={"loginsvg"}>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <LockClosedIcon />
            </div>
            <label>Password</label>
          </div>
          <button onClick={(e) => loginUser(e)}>login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginMain;
