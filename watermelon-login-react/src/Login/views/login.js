import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginHandler } from '../handlers/loginHandler';

/*
 * Component for watermelon platform registration.
 */
const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();

    const requestBody = {
      Wwvd: false,
      company: '',
      country: 'Netherlands',
      email,
      firstname: firstName,
      language: '',
      lastname: lastName,
      password,
      phone: '5642582',
      plan_id: 5,
      referer: 'Nikos',
      skip_slack_notification: true,
    };

    loginHandler(requestBody, navigate);
  };

  return (
    <form onSubmit={onLogin}>
      <h1>Watermelon Platform Login</h1>

      <label htmlFor="firstName">First Name </label>
      <input
        type="text"
        id="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <br />

      <label htmlFor="lastName">Last Name </label>
      <input
        type="text"
        id="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <br />

      <label htmlFor="email">Email </label>
      <input
        type="text"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />

      <label htmlFor="password">Password </label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <br />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
