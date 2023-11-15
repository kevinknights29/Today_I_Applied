import React, { useState } from "react";
import supabase from "../../client/supabaseClient";

function SignUpForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /**
   * Handles form submission by inserting user data into a Supabase database.
   * @param {Event} event - The form submission event.
   */
  const handleSubmit = async (event) => {
    // Prevent the default form behavior
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);

    // Insert a new user into your table
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.error(error);
    } else {
      console.log("User inserted successfully:", data);
    }
  };

  return (
    <div className="sign-up-form">
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
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={() => props.onFormSwitch("login")}>
        Already have an account? <br /> Login here!
      </button>
    </div>
  );
}

export default SignUpForm;
