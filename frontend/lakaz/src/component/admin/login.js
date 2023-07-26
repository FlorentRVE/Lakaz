import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {

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
    const apiUrl = 'http://127.0.0.1:8000/api/login';

    // Créer un objet pour les données à envoyer dans la requête POST
    const data = {
      username: username,
      password: password,
    };

    // Envoyer la requête POST à l'API
    axios.post(apiUrl, data)
      .then((response) => {

        // Gérer la réponse de l'API si nécessaire
        localStorage.setItem('jwtToken', response.data.token);

        // Rediriger vers la page d'accueil après une connexion réussie
        window.location.href = 'http://127.0.0.1:3000/create';
      })
      .catch((error) => {
        // Gérer les erreurs de la requête si nécessaire
        console.error(error);
      });
  };

  return (
    <div>
      <h1 className='text-center text-2xl'>Page de connexion</h1>

      <form onSubmit={handleSubmit} className='w-1/2 mx-auto my-7 flex flex-col gap-5 bg-lime-200 rounded-2xl p-4'>

        <div className='flex justify-between'>
          <label>Identifiant:</label>
          <input type="text" value={username} onChange={handleUsernameChange} className='border-2 border-slate-500'/>
        </div>

        <div className='flex justify-between'>
          <label>Mot de passe:</label>
          <input type="password" value={password} onChange={handlePasswordChange} className='border-2 border-slate-500'/>
        </div>

        <button type="submit" className='bg-blue-500 rounded-2xl p-2'>Se connecter</button>

        <Link to={`/`} style={{ textDecoration: 'none' }}>
            <button className="bg-orange-400 rounded-2xl py-2 px-4 text-slate-200 shadow-xl">Retour</button>
        </Link>

      </form>
    </div>
  );
}

export default Login;
