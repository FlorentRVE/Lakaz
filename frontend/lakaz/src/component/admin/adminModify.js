import React from 'react';
import Login from './login';
import Modify from './Modify';
import Footer from '../footer';
import PopupWindow from './popup';

const Adminmodify = () => {

  const token = localStorage.getItem('jwtToken'); // Supposons que vous stockez le token JWT dans le localStorage après la connexion réussie
  
  if (token) {    return <div><Modify /> <PopupWindow /> <Footer /></div>;  }  return <Login />;}
;

export default Adminmodify;