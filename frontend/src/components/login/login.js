import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import Header from '../header';

const Login = () => {
  // State pour gérer les champs du formulaire et les erreurs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Hook pour la navigation
  const navigate = useNavigate();

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Remplacer par l'URL de votre backend
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });

      // Log de la réponse pour débogage
      console.log(response);

      // Vérifiez si la réponse contient 'data' et 'token'
      if (response && response.data && response.data.token) {
        const { token } = response.data;
        localStorage.setItem('token', token); // Stocker le token dans le localStorage
        navigate('/idea'); // Redirige l'utilisateur vers la page d'idée
      } else {
        // Si la réponse n'a pas de token, afficher un message d'erreur
        setError(response.data.message || 'Invalid email or password');
      }
    } catch (err) {
      console.error(err); // Affichez l'erreur dans la console
      setError('An error occurred. Please try again.'); // Affiche un message d'erreur générique
    }
  };

  return (
    <div className="login-container">
      <Header />

      {/* Tagline */}
      <p className="tagline">"Here where imagination meets opportunity"</p>

      {/* Login Form */}
      <div className="form-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="login_email">Email:</label>
          <input
            type="email"
            id="login_email"
            name="login_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="login_password">Password:</label>
          <input
            type="password"
            id="login_password"
            name="login_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">Login</button>
        </form>

        {/* Register Now Link */}
        <p>
          Don't have an account?{' '}
          <Link to="/register" className="register-link">Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
