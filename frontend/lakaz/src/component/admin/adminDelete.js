import React from 'react';
import Login from './login';
import Delete from './Delete';
import PopupWindow from './popup';

const Admindelete = () => {

  const token = localStorage.getItem('jwtToken'); // Supposons que vous stockez le token JWT dans le localStorage après la connexion réussie
  
  if (token) {    return <div><Delete /> <PopupWindow /></div>;  }  return <Login />;}
;

export default Admindelete;