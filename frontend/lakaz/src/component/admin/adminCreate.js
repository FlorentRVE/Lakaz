import React from 'react';
import Login from './login';
import Create from './Create';

const Admincreate = () => {

  const token = localStorage.getItem('jwtToken'); // Supposons que vous stockez le token JWT dans le localStorage après la connexion réussie
  
  if (token) {    return <Create />;  }  return <Login />;}
;

export default Admincreate;
