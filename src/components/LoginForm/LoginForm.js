import React, {useState} from 'react';
import supabase from '../../client/supabaseClient';
import PropTypes from 'prop-types';

/**
 * Renders a login form component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Function} props.onFormSwitch - The function to switch
 *  between login and register forms.
 * @return {JSX.Element} The login form component.
 */
function LoginForm({onFormSwitch, onAuthenticate}) {
  // State variables
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('');

  /**
   * Handles the form submission.
   *
   * @param {Event} event - The form submission event.
   * @return {Promise<void>} A promise that resolves when the form
   *  submission is handled.
   */
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
      onAuthenticate();
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
      <button onClick={() => onFormSwitch('register')}>
        Don&apos;t have an account? <br /> Sign-up here!
      </button>
    </div>
  );
}

LoginForm.propTypes = {
  onFormSwitch: PropTypes.func.isRequired,
  onAuthenticate: PropTypes.func.isRequired,
};

export default LoginForm;
