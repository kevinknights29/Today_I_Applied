import React, {useState} from 'react';
import loginIcon from '../../assets/icons/login.png';
import LoginForm from '../LoginForm/LoginForm';
import SignUpForm from '../SignUpForm/SignUpForm';
import useFetchUserID from '../../hooks/useFetchUserID';

const Login = () => {
  const [show, setShow] = useState(false);
  const [, setIsAuthenticated] = useState(false);
  const [currentForm, setCurrentForm] = useState('login');
  const userID = useFetchUserID();

  const handleFormSwitch = (formName) => {
    setCurrentForm(formName);
  };

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    setShow(false);
  };

  const renderForm = () => {
    if (currentForm === 'login') {
      return (
        <LoginForm
          onFormSwitch={handleFormSwitch}
          onAuthenticate={handleAuthentication}
        />
      );
    } else {
      return (
        <SignUpForm
          onFormSwitch={handleFormSwitch}
          onAuthenticate={handleAuthentication}
        />
      );
    }
  };

  return (
    <div className="login">
      <button
        onClick={() => {
          setShow(!show);
        }}
        disabled={userID === null ? false : true}
      >
        <img src={loginIcon} alt="loginIcon"></img>
        <p>{userID === null ? 'Log in' : 'Logged In'}</p>
      </button>
      {show && renderForm()}
    </div>
  );
};

export default Login;
