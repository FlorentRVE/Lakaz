import React from 'react';
import Login from './login';
import Image from './image';
import PopupWindow from './popup';

const Adminimage = () => {

  const token = localStorage.getItem('jwtToken'); // Supposons que vous stockez le token JWT dans le localStorage après la connexion réussie
  
  if (token) {    return <div><Image /> <PopupWindow /></div>;  }  return <Login />;}
;

export default Adminimage;