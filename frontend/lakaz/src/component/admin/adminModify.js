import React from 'react';
import Login from './login';
import Modify from './Modify';

const Adminmodify = () => {

  const token = localStorage.getItem('jwtToken'); // Supposons que vous stockez le token JWT dans le localStorage après la connexion réussie
  
  if (token) {    return <Modify />;  }  return <Login />;}
;

export default Adminmodify;