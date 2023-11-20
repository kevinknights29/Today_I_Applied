import React, {useState} from 'react';
import supabase from '../../client/supabaseClient';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFeedback('');

    if (!email || !password) {
      setFeedback('Please enter both email and password.');
      return;
    }

    const {error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setFeedback('Failed to login: ' + error.message);
      console.error(error.message);
    } else {
      setFeedback('User authenticated successfully!');
      console.log('User authenticated successfully!');
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
      {feedback && <div className="feedback-message">{feedback}</div>}
      <button onClick={() => props.onFormSwitch('register')}>
        Don't have an account? <br /> Sign-up here!
      </button>
    </div>
  );
}

export default LoginForm;
