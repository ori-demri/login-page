import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
import person from '../../assets/person.png';

function Register() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="background">
      <img className="person-img" src={person} alt="Person" />
      <h1>
        <span style={{ fontWeight: 'bold' }}>User</span>
        {' '}
        <span style={{ fontWeight: 'normal' }}>Login</span>
      </h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="inputs">
          <div>
            <input
              placeholder="Username"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              placeholder="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button className="login-btn" type="submit">Log In</button>
        <button className="register-text" type="button" onClick={handleRegisterClick}>Not registered? Register now!</button>
      </form>
    </div>
  );
}

export default Register;
