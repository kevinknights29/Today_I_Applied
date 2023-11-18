import React, { useState } from "react";
import login_icon from "../../assets/icons/login.png";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import supabase from "../../client/supabaseClient";

const Login = () => {
  const [show, setShow] = useState(false);
  const [currentForm, setCurrentForm] = useState("login");
  const [authenticated, setAuthenticated] = useState(false);
  const handleFormSwitch = (formName) => {
    setCurrentForm(formName);
  };

  // Get Authenticated User ID
  const getUserID = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      setAuthenticated(true);
    }
  };

  return (
    <div className="login">
      <button
        onClick={() => {
          setShow(!show);
        }}
        disabled={getUserID()}
      >
        <img src={login_icon} alt="login_icon"></img>
        <p>{getUserID() ? "Logged In" : "Log in"}</p>
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
