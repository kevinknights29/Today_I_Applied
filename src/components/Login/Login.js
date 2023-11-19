import React, { useState } from "react";
import login_icon from "../../assets/icons/login.png";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import { getCurrentUserId } from "../../client/supabaseAuth";

const Login = () => {
  const [show, setShow] = useState(false);
  const [currentForm, setCurrentForm] = useState("login");
  const userID = getCurrentUserId();

  const handleFormSwitch = (formName) => {
    setCurrentForm(formName);
  };

  const renderForm = () => {
    if (currentForm === "login") {
      return <LoginForm onFormSwitch={handleFormSwitch} />;
    } else {
      return <SignUpForm onFormSwitch={handleFormSwitch} />;
    }
  };

  return (
    <div className="login">
      <button
        onClick={() => {
          setShow(!show);
        }}
        disabled={!!userID}
      >
        <img src={login_icon} alt="login_icon"></img>
        <p>{userID ? "Logged In" : "Log in"}</p>
      </button>
      {show && renderForm()}
    </div>
  );
};

export default Login;
