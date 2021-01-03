import React from "react";
import { RegisterBg, LoginBg } from "../../assets";
import { Input, Button, Gap, Link } from "../../component";
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory();

  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} alt="Register" className="bg-images" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={10} />
        <Input label="Password" placeholder="Password" />
        <Gap height={40} />
        <Button onClick={() => history.push('/')} title="Sign In" />
        <Gap height={100} />
        <Link onClick={() => history.push('/register')} title="Belum punya akun, silahkan daftar" />
      </div>
    </div>
  );
};

export default Login;
