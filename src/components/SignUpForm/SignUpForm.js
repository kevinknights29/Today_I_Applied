import React, {useState} from 'react';
import supabase from '../../client/supabaseClient';

function SignUpForm(props) {
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

    const {error} = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setFeedback('Failed to sign up: ' + error.message);
      console.error(error.message);
    } else {
      setFeedback('User registered successfully!');
      console.log('User inserted successfully:');
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
      {feedback && <div className="feedback-message">{feedback}</div>}
      <button onClick={() => props.onFormSwitch('login')}>
        Already have an account? <br /> Login here!
      </button>
    </div>
  );
}

export default SignUpForm;
