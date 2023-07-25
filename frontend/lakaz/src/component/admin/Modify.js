import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import {useState, useEffect} from "react";
import * as api from '../../utils/api';
import axios from "axios";

const Modify = () => {

  const params = useParams();
  const id = params.id;

  // Création du state data.
  const [data, setData] = useState([]); 

  // Création du state pour remplir le formulaire
  const [categorie, setCategorie] = useState('');
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [etapes, setEtapes] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    api.getRecipebyId(id).then((data) => {
      setData(data);
      
      setCategorie(data.Categorie);
      setNom(data.Nom);
      setDescription(data.Description);
      setEtapes(data.Etapes);
      setIngredients(data.Ingredients);
    });
  }, [id]);

  
  if(data === undefined) {
    return <Navigate to="/404" />; // Redirection vers la page d'erreur si ID non présent dans le json.
  }
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleNomChange = (e) => {
    setNom(e.target.value);
  };
  
  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };
  
  const handleEtapesChange = (e) => {
    setEtapes(e.target.value);
  };
  
  const handleCategorieChange = (e) => {
    setCategorie(e.target.value);
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  
  const token = localStorage.getItem('jwtToken'); // Récupération du Token

  // =============== Envoyer les données dans la requête POST ================
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    // Récupération des states pour les données
    const formData = {
      id: id,
      categorie: categorie,
      nom: nom,
      ingredients: ingredients,
      etapes: etapes,
      image: image,
        description: description,
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
    axios.post("http://127.0.0.1:8000/api/modifyrecette", formData, option)
    .then((response) => {
        console.log(response);
    
        // Rediriger vers la page d'accueil après une connexion réussie
        window.location.href = 'http://127.0.0.1:3000/';
    })
    .catch((error) => {
        // Gérer les erreurs de la requête si nécessaire
        console.error(error);
    });
  
    // Réinitialisez les valeurs des champs après la soumission réussie
    setNom('');
    setDescription('');
    setIngredients('');
    setEtapes('');
    setCategorie('');
    setImage(null);
  
    };

    // ====================================
  
    return (
      <div>
        <h1 className='text-center text-2xl bg-red-200 p-6 rounded-t-2xl'>Modifier une recette</h1>
        <form onSubmit={handleSubmit} className='bg-lime-200 rounded-b-2xl p-4 flex flex-col gap-5'>
          <div>
            <label>Titre :</label>
            <input type="text" value={nom} onChange={handleNomChange} />
          </div>

          <div>
            <label>Description :</label>
            <textarea value={description} onChange={handleDescriptionChange} />
          </div>

          <div>
            <label>Ingrédients :</label>
            <textarea value={ingredients} onChange={handleIngredientsChange} />
          </div>

          <div>
            <label>Étapes :</label>
            <textarea value={etapes} onChange={handleEtapesChange} />
          </div>

          <div>
            <label>Catégorie :</label>
            <select value={categorie} onChange={handleCategorieChange}>
              <option value="">Sélectionnez une catégorie</option>
              <option value="petit-dejeuner">Petit-déjeuner</option>
              <option value="repas">Repas</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>

          <div>
            <label>Image : </label>
            <input type="file" onChange={handleImageChange} />
          </div>

          <button type="submit" className='bg-blue-200 rounded-2xl p-2'>Modifier la recette</button>
        </form>

        <div className='flex justify-between'>
          <Link to={`/`} style={{ textDecoration: 'none' }}>
            <button className="bg-blue-500 rounded-lg p-2 text-slate-200">Retour</button>
          </Link>

          <Link to={`/delete/${id}`} style={{ textDecoration: 'none' }}>
            <button className="bg-red-500 rounded-lg p-2 text-slate-200">Supprimer la recette</button>
          </Link>
        </div>
      </div>
    );
  };

export default Modify;
