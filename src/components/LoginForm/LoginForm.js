import React, { useState } from "react";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your_email@example.com"
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          placeholder="*************"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => props.onFormSwitch("register")}>
        Don't have an account? <br /> Sign-up here!
      </button>
    </div>
  );
}

export default LoginForm;
