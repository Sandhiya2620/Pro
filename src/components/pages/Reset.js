import React, { useState } from 'react';
import './style/reset.css' ;

const ResetPasswordForm = ({ onSubmit }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      onSubmit(password);
    } else {
      alert("Passwords don't match. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>New Password:</label>
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your new password"
          required
        />
      </div>
      <div>
        <label>Confirm New Password:</label>
        <input 
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your new password"
          required
        />
      </div>
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPasswordForm;
