import React from 'react';
import Login from './login';
import Image from './image';

const Adminimage = () => {

  const token = localStorage.getItem('jwtToken'); // Supposons que vous stockez le token JWT dans le localStorage après la connexion réussie
  
  if (token) {    return <Image />;  }  return <Login />;}
;

export default Adminimage;