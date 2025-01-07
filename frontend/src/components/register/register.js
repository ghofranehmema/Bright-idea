import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css';  // CSS pour le formulaire d'inscription

const Register = () => {
  // Déclaration des états pour chaque champ du formulaire
  const [name, setName] = useState('');
  const [alias, setAlias] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate(); // Utilisation de navigate pour redirection

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification de la correspondance des mots de passe
    if (password !== confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas.');
      return;
    }

    // Vérification de la longueur du mot de passe
    if (password.length < 8) {
      setErrorMessage('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }

    try {
      // Envoi de la requête d'inscription au backend
      const response = await axios.post('http://localhost:5000/api/users/register', {
        name,
        alias,
        email,
        password,
      });

      // Si l'inscription réussit, on affiche un message de succès
      setSuccessMessage(response.data.message);
      setErrorMessage('');
      navigate('/login'); // Redirection vers la page de connexion
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setSuccessMessage('');
    }
  };

  return (
    <div className="container">
      {/* Formulaire d'inscription */}
      <div className="form-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="alias">Alias:</label>
          <input
            type="text"
            id="alias"
            name="alias"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="note">*Password should be at least 8 characters</p>

          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          {/* Affichage des messages d'erreur ou de succès */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
