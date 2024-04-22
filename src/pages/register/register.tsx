import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './register.module.css';
import person from '../../assets/person.png';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);
  const navigate = useNavigate();

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
    setPasswordsMatch(event.target.value === password);
  };

  const handleConfirmPasswordFocus = () => {
    setIsConfirmPasswordFocused(true);
  };

  const handleConfirmPasswordBlur = () => {
    setIsConfirmPasswordFocused(false);
  };

  const getInputClassName = () => {
    if (isConfirmPasswordFocused && password) {
      return passwordsMatch ? styles.matched : styles.notMatched;
    }
    return '';
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (passwordsMatch) {
      console.log(`${username} registered with ${password} as password`);
    } else {
      console.log(`${password} and ${confirmPassword} are not the same!`);
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordsMatch(event.target.value === confirmPassword);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className={styles.background}>
      <img className={styles.personImg} src={person} alt="Person" />
      <h1>
        <span style={{ fontWeight: 'bold' }}>User</span>
        {' '}
        <span style={{ fontWeight: 'normal' }}>Register</span>
      </h1>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <div>
            <input
              placeholder="Username"
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div>
            <input
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div>
            <input
              className={getInputClassName()}
              placeholder="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onFocus={handleConfirmPasswordFocus}
              onBlur={handleConfirmPasswordBlur}
              required
            />
          </div>
        </div>
        <button className={styles.registerBtn} type="submit">Register</button>
        <button className={styles.loginText} type="button" onClick={handleLoginClick}>Already have an account? Log in</button>
      </form>
    </div>
  );
}

export default Register;
