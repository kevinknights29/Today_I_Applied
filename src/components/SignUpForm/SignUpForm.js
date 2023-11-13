import React, { useState } from "react";

function SignUpForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="sign-up-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
        />
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
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={() => props.onFormSwitch("login")}>
        Already have an account? <br /> Login here!
      </button>
    </div>
  );
}

export default SignUpForm;
