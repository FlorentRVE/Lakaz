import React from 'react';
import Login from './login';
import Create from './Create';
import Footer from '../footer';
import PopupWindow from './popup';



const Admincreate = () => {

  // Récupérez le token JWT depuis le local storage
  const token = localStorage.getItem('jwtToken');

  
  if (token) {    return <div><Create /> <PopupWindow /> <Footer /></div>;  }  return <Login />;}

  
;

export default Admincreate;
