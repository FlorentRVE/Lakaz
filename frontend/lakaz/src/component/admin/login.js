import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Importez useHistory
import axios from 'axios';

const Login = () => {
  const history = useHistory(); // Utilisez useHistory pour accéder à l'historique de navigation

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Votre URL d'API distant
    const apiUrl = 'https://example.com/api/login';

    // Créer un objet pour les données à envoyer dans la requête POST
    const data = {
      username: username,
      password: password,
    };

    // Envoyer la requête POST à l'API
    axios.post(apiUrl, data)
      .then((response) => {
        // Gérer la réponse de l'API si nécessaire
        console.log(response.data);

        // Rediriger vers la page admin après une connexion réussie
        history.push('/admin');
      })
      .catch((error) => {
        // Gérer les erreurs de la requête si nécessaire
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Page de connexion</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
