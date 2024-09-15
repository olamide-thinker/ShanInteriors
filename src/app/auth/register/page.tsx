"use client"

import React, { useState } from 'react';
import { useSignupMutation }  from '../../../api/authApi';

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup, { isLoading, error, data }] = useSignupMutation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup({ email, password })
      .unwrap()
      .then((response) => {
        console.log('Signup successful:', response);
        localStorage.setItem('authToken', response.idToken);
      })
      .catch((err) => {
        console.error('Signup error:', err.error);
      });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>
        {error && <p>Error: </p>}
      </form>
    </div>
  );
};

export default Signup;
