import React from 'react';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

const PopupWindow = () => {

    const token = localStorage.getItem('jwtToken');
    const [isOpen, setIsOpen] = useState(false);

  //=========== Gestion de l'expiration du token ====================

  useEffect(() => {

    const decodedToken = jwt_decode(token); // Décodage du token pour récupérer la date d'expiration
    const currentTime = Date.now() / 1000; // Récupération de la date actulle

    const tempsrestant = decodedToken.exp - currentTime;
    const tempsrestantMinutes = tempsrestant / 60; // On compare les deux pour avoir le temps restant en minute
    
    if (tempsrestantMinutes < 1) { // Si il reste moins de 1 minute

      setIsOpen(true); // Affichage du pop-up
      
    }
    
    console.log('le token expire dans: ' + tempsrestantMinutes + ' minutes');

  }, [token]);

  const closePopup = () => {
    setIsOpen(false); // A la fermeture du pop-up
    localStorage.removeItem('jwtToken'); // On vide le local storage du précédent token
    window.location.reload(); // et on recharge la page
  };

  return (
    <div className=" flex items-center justify-center">

      {isOpen && 

        <div className="fixed inset-0 flex items-center justify-center z-50">
            
          <div className="bg-green-400 p-4 rounded shadow-xl w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-red-600">Session expirée</h2>
            <p className="text-slate-800 my-6">
              La session est expirée, veuillez vous reconnecter.
            </p>

            <button onClick={closePopup} className="p-2 cursor-pointer bg-red-500 rounded-xl">close</button>
          </div>

        </div>

      }
    </div>
  );
};

export default PopupWindow;
