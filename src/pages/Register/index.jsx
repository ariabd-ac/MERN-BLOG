import React from "react";
import "./register.scss";
import { RegisterBg, LoginBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../component";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="Register" className="bg-images" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full name" placeholder="Full name" />
        <Gap height={10} />
        <Input label="Email" placeholder="Email" />
        <Gap height={10} />
        <Input label="Password" placeholder="Password" />
        <Gap height={40} />
        <Button title="Register" />
        <Gap height={100} />
        <Link title="Kembali ke Login" />
      </div>
    </div>
  );
};

export default Register;
