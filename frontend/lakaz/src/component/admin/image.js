import React, { useState, useEffect } from 'react';
import * as api from '../../utils/api';
import { useParams,  Link } from "react-router-dom";
import axios from "axios";

const Image = () => {

  const [upload, setupload] = useState(false); // Booléen pour l'affichage du message
  const [image, setImage] = useState(null); // Variable pour stocker l'image
  const [data, setData] = useState([]);

  const params = useParams();
  const id = params.id;
  
  const token = localStorage.getItem('jwtToken'); // Récupération du Token

// ============= Image upload ===============
    const handleImageChange = (e) => { // Gestion de l'image à upload
    const file = e.target.files[0];
    setImage(file);
    };

    useEffect(() => {
      api.getRecipebyId(id).then((data) => {
        setData(data); // On modifie data pour lui donner la valeur des données récupérées via getItem en utilisant l'ID.
      });
    }, [id]);

  // =============== Envoyer les données dans la requête POST ================
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    // Récupération des states pour les données
    const formData = new FormData();

    formData.append('image', image);
    formData.append('id', id);

      // Création du corps de la requête
      let option = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}` 
        },
    }

    // Envoyer la requête POST à l'API
    axios.post("https://www.recette-lakaz.re/api/modifyimage", formData, option)
    .then((response) => {
        console.log(response);
        setupload(true);
  
    })
    .catch((error) => {
        // Gérer les erreurs de la requête si nécessaire
        console.error(error);
        });
  
  };
    // ====================================
  
    return (
      <div>
        <h1 className='text-center text-2xl text-red-600 font-bold my-7 bg-green-400 p-4 rounded-xl uppercase shadow-xl'>Modifier l'image</h1>

        <img src={data.Image} alt="" className="w-3/4 mx-auto max-h-80 border-b-4 object-cover rounded-2xl my-6"/>

        <form onSubmit={handleSubmit} className='bg-lime-200 rounded-2xl p-4 flex flex-col gap-5 items-center shadow-xl'>

            <div className='flex flex-col'>
                <label className='font-bold text-red-500 uppercase mb-2'>Image : </label>
                <input type="file" onChange={handleImageChange} className='p-2 rounded-xl'/>
            </div>
        
            <div className='flex justify-between w-[70%]'>
              <Link to={`/`} style={{ textDecoration: 'none' }}>
                <button className="bg-blue-500 rounded-lg p-2 text-slate-200">Retour</button>
              </Link>
              <button type="submit" className='bg-red-600 rounded-2xl p-2 text-slate-100'>Modifier l'image</button>
            </div>
        </form>

        {upload &&
        
          <div className='flex flex-col items-center justify-center bg-lime-200 py-4'>
            <p className='text-green-500 font-bold mb-3'>L'image a bien été modifié !</p>
            <p className='text-green-500 font-bold'>Vous pouvez retourner à l'accueil</p>

          </div>
        }

      </div>
    );
  };

export default Image;
