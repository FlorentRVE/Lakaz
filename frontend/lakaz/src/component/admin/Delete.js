import React, { useState } from 'react';
import { useParams,  Link } from "react-router-dom";
import axios from "axios";

const Delete = () => {

  const [deleted, setdeleted] = useState(false);

  const params = useParams();
  const id = params.id;
  
  const token = localStorage.getItem('jwtToken'); // Récupération du Token

  // =============== Envoyer les données dans la requête POST ================
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    // Récupération des states pour les données
    const formData = {
      id: id,
      }

      // Création du corps de la requête
      let option = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${token}` 
        },
    }

    // Envoyer la requête POST à l'API
    axios.post("http://127.0.0.1:8000/api/deleterecette", formData, option)
    .then((response) => {
        console.log(response);
        setdeleted(true);
  
    })
    .catch((error) => {
        // Gérer les erreurs de la requête si nécessaire
        console.error(error);
        });
  
  };
    // ====================================
  
    return (
      <div>
        <h1 className='text-center text-2xl bg-red-200 p-6 rounded-t-2xl'>Supprimer une recette</h1>
        <p className="text-center text-3xl bg-slate-500 text-slate-50 py-9">Voulez-vous vraiment supprimer cette recette ?</p>

        {deleted &&
        
          <div className='flex flex-col items-center justify-center bg-lime-200 py-4'>
            <p className='text-green-500 font-bold mb-3'>La recette a bien été supprimée !</p>
            <p className='text-green-500 font-bold'>Vous pouvez retourner à l'accueil</p>

          </div>
        }

        <form onSubmit={handleSubmit} className='bg-lime-200 rounded-b-2xl p-4 flex gap-5 justify-between'>
        
            <Link to={`/`} style={{ textDecoration: 'none' }}>
                <button className="bg-blue-500 rounded-lg p-2 text-slate-200">Retour</button>
            </Link>
            <button type="submit" className='bg-red-600 rounded-2xl p-2 text-slate-100'>Supprimer la recette</button>
        </form>




      </div>
    );
  };

export default Delete;
