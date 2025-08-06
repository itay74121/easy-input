import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    // For now, just log the values
    console.log('Email:', email, 'Password:', password);
    navigate('/dashboard');
  };

  return (
    <div className="App app-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          padding: '2.5rem 2rem',
          minWidth: '320px',
          maxWidth: '90vw'
        }}
      >
        <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 className="app-title" style={{ margin: 0, fontSize: '2rem', color: '#333' }}>Sign In</h1>
        </header>
        <form onSubmit={handleSubmit} className="signin-form" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label
              htmlFor="email"
              style={{ fontWeight: 500, color: '#555', textAlign: 'left' }}
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              style={{
                padding: '0.7rem',
                borderRadius: '6px',
                border: '1px solid #ccc',
                fontSize: '1rem'
              }}
              placeholder="Enter your email"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <label
              htmlFor="password"
              style={{ fontWeight: 500, color: '#555', textAlign: 'left' }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              style={{
                padding: '0.7rem',
                borderRadius: '6px',
                border: '1px solid #ccc',
                fontSize: '1rem'
              }}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            style={{
              marginTop: '0.5rem',
              padding: '0.8rem',
              borderRadius: '6px',
              border: 'none',
              background: 'linear-gradient(90deg, #4f8cff 0%, #2355d8 100%)',
              color: 'white',
              fontWeight: 600,
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
