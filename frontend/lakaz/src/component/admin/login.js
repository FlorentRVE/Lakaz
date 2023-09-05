import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setlogin] = useState(false);

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
        // window.location.href = 'http://127.0.0.1:3000/create';
        setlogin(true);
      })
      .catch((error) => {
        // Gérer les erreurs de la requête si nécessaire
        console.error(error);
      });
  };

  return (
    <div>
      <h1 className='text-center text-2xl text-red-600 font-bold my-5 bg-green-400 p-4 rounded-xl'>Page de connexion</h1>

      <form onSubmit={handleSubmit} className=' mx-auto my-7 flex flex-col gap-7 bg-lime-200 rounded-2xl p-4 shadow-xl sm:w-1/2'>

        <div className='flex justify-between'>
          <label className='text-red-600 font-bold uppercase'>Identifiant:</label>
          <input type="text" value={username} onChange={handleUsernameChange} className='border-2 border-slate-500 flex-1 ml-3 sm:max-w-[150px] lg:max-w-none'/>
        </div>

        <div className='flex justify-between'>
          <label className='text-red-600 font-bold uppercase'>Mot de passe:</label>
          <input type="password" value={password} onChange={handlePasswordChange} className='border-2 border-slate-500 flex-1 ml-3 sm:max-w-[150px] lg:max-w-none'/>
        </div>

        <div className='flex flex-col items-center justify-center'>
          {login && <p className='text-green-500 font-bold mb-3'>Connexion réussie !</p>}
          {login && <p className='text-green-500 font-bold'>Vous pouvez retourner à l'accueil</p>}

        </div>

        <button type="submit" className="bg-blue-500 rounded-2xl py-2 px-4 text-slate-200 shadow-xl hover:brightness-125 active:brightness-150 focus:outline-none focus:ring focus:ring-slate-100">Se connecter</button>

        <Link to={`/`} style={{ textDecoration: 'none', margin: '0 auto' }}>
        <button className="bg-slate-800 rounded-2xl py-2 px-4 text-slate-200 shadow-xl hover:brightness-125 active:brightness-150 focus:outline-none focus:ring focus:ring-slate-100">Retour à l'accueil</button>
        </Link>

      </form>
    </div>
  );
}

export default Login;
