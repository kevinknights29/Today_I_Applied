import React, { useState } from "react";
import login_icon from "../../assets/icons/login.png";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";

const Login = () => {
  const [show, setShow] = useState(true);
  const [currentForm, setCurrentForm] = useState("login");
  const handleFormSwitch = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      <button className="login" onClick={() => setShow(!show)}>
        <img src={login_icon} alt="login_icon"></img>
        <p>Login</p>
      </button>
      {show ? (
        currentForm === "login" ? (
          <LoginForm onFormSwitch={handleFormSwitch} />
        ) : (
          <SignUpForm onFormSwitch={handleFormSwitch} />
        )
      ) : null}
    </div>
  );
};

export default Login;
