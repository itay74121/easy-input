import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
    // For now, just log the values
    console.log({
      fullName,
      username,
      email,
      phone,
      password,
      confirmPassword
    });
    navigate('/');
  };

  return (
    <div className="App app-bg signup-bg">
      <div className="signup-container">
        <header className="signup-header">
          <h1 className="app-title">Sign Up</h1>
        </header>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="signup-field">
            <label htmlFor="fullName" className="signup-label">Full Name</label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              required
              className="signup-input"
              placeholder="Enter your full name"
            />
          </div>
          <div className="signup-field">
            <label htmlFor="username" className="signup-label">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              className="signup-input"
              placeholder="Choose a username"
            />
          </div>
          <div className="signup-field">
            <label htmlFor="email" className="signup-label">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="signup-input"
              placeholder="Enter your email"
            />
          </div>
          <div className="signup-field">
            <label htmlFor="phone" className="signup-label">Phone</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
              className="signup-input"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="signup-field">
            <label htmlFor="password" className="signup-label">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="signup-input"
              placeholder="Create a password"
            />
          </div>
          <div className="signup-field">
            <label htmlFor="confirmPassword" className="signup-label">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
              className="signup-input"
              placeholder="Re-enter your password"
            />
          </div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
