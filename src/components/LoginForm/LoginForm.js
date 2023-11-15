import { createClient } from "@supabase/supabase-js";
import React, { useState } from "react";

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /**
   * Handles the form submission for the login form.
   * Prevents the default form behavior, creates a Supabase client, and authenticates with Supabase credentials.
   * @param {Event} event - The form submission event.
   */
  const handleSubmit = async (event) => {
    // Prevent the default form behavior
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);

    // Authenticate with your Supabase credentials
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.error(error);
    } else {
      console.log("User authenticated successfully:", data);
    }
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
