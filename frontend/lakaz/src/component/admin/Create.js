import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Create = () => {

    const token = localStorage.getItem('jwtToken'); // Récupération du token JWT dans le localStorage
  
    // Création du state pour remplir le formulaire
    const [categorie, setCategorie] = useState('');
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    
    //============= Setup des ingrédients ============
    const [ingredientUn, setIngredientUn] = useState('');
    const [ingredientDeux, setIngredientDeux] = useState('');
    const [ingredientTrois, setIngredientTrois] = useState('');
    const [ingredientQuatre, setIngredientQuatre] = useState('');
    const [ingredientCinq, setIngredientCinq] = useState('');
    const [ingredientSix, setIngredientSix] = useState('');
    const [ingredientSept, setIngredientSept] = useState('');
    const [ingredientHuit, setIngredientHuit] = useState('');
    const [ingredientNeuf, setIngredientNeuf] = useState('');
    const [ingredientDix, setIngredientDix] = useState('');

    //============= Setup des étapes ================
    const [etapeUn, setEtapeUn] = useState('');
    const [etapeDeux, setEtapeDeux] = useState('');
    const [etapeTrois, setEtapeTrois] = useState('');
    const [etapeQuatre, setEtapeQuatre] = useState('');
    const [etapeCinq, setEtapeCinq] = useState('');
    const [etapeSix, setEtapeSix] = useState('');
    const [etapeSept, setEtapeSept] = useState('');
    const [etapeHuit, setEtapeHuit] = useState('');
    const [etapeNeuf, setEtapeNeuf] = useState('');
    const [etapeDix, setEtapeDix] = useState('');

    // Booléen pour l'affichage du message de création de recette
    const [created, setCreated] = useState(false);
  
    const handleDescriptionChange = (e) => {
      setDescription(e.target.value);
    };
    const handleNomChange = (e) => {
      setNom(e.target.value);
    };

    const handleCategorieChange = (e) => {
      setCategorie(e.target.value);
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };
  
    //============= Gestion des ingrédients ============

    const handleIngredientUnChange = (e) => {
      setIngredientUn(e.target.value);
    };

    const handleIngredientDeuxChange = (e) => {
      setIngredientDeux(e.target.value);
    };

    const handleIngredientTroisChange = (e) => {
      setIngredientTrois(e.target.value);
    };

    const handleIngredientQuatreChange = (e) => {
      setIngredientQuatre(e.target.value);
    };

    const handleIngredientCinqChange = (e) => {
      setIngredientCinq(e.target.value);
    };

    const handleIngredientSixChange = (e) => {
      setIngredientSix(e.target.value);
    };

    const handleIngredientSeptChange = (e) => {
      setIngredientSept(e.target.value);
    };

    const handleIngredientHuitChange = (e) => {
      setIngredientHuit(e.target.value);
    };

    const handleIngredientNeufChange = (e) => {
      setIngredientNeuf(e.target.value);
    };

    const handleIngredientDixChange = (e) => {
      setIngredientDix(e.target.value);
    };

    //==================================================

    //============= Gestion des étapes ================

    const handleEtapeUnChange = (e) => {
      setEtapeUn(e.target.value);
    };
    const handleEtapeDeuxChange = (e) => {
      setEtapeDeux(e.target.value);
    };

    const handleEtapeTroisChange = (e) => {
      setEtapeTrois(e.target.value);
    };

    const handleEtapeQuatreChange = (e) => {
      setEtapeQuatre(e.target.value);
    };

    const handleEtapeCinqChange = (e) => {
      setEtapeCinq(e.target.value);
    };

    const handleEtapeSixChange = (e) => {
      setEtapeSix(e.target.value);
    };

    const handleEtapeSeptChange = (e) => {
      setEtapeSept(e.target.value);
    };

    const handleEtapeHuitChange = (e) => {
      setEtapeHuit(e.target.value);
    };

    const handleEtapeNeufChange = (e) => {
      setEtapeNeuf(e.target.value);
    };

    const handleEtapeDixChange = (e) => {
      setEtapeDix(e.target.value);
    };

  //===================================================  
    
    // =============== Envoyer les données dans la requête POST ================
    const handleSubmit = async (e) => {
      
      e.preventDefault();
      
      // Récupération des states pour les données
      const formData = {
        categorie: categorie,
        nom: nom,
        ingredients: [ingredientUn, ingredientDeux, ingredientTrois, ingredientQuatre, ingredientCinq, ingredientSix, ingredientSept, ingredientHuit, ingredientNeuf, ingredientDix],
        etapes: [etapeUn, etapeDeux, etapeTrois, etapeQuatre, etapeCinq, etapeSix, etapeSept, etapeHuit, etapeNeuf, etapeDix],
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
      axios.post("http://127.0.0.1:8000/api/createrecette", formData, option)
      .then((response) => {
          console.log(response);
          setCreated(true);      
  
      })
      .catch((error) => {
          // Gérer les erreurs de la requête si nécessaire
          console.error(error);
      });
  
    // Réinitialisez les valeurs des champs après la soumission réussie
    setNom('');
    setDescription('');
    setCategorie('');
    setImage(null);
  
    };

    // ====================================
  
    return (
      <div>
        <h1 className='text-center text-2xl text-red-600 font-bold my-7'>Créer recette</h1>
        <form onSubmit={handleSubmit} className='bg-lime-200 rounded-b-2xl p-4 flex flex-col gap-5'>
          <div className='flex flex-col'>
            <label>Titre :</label>
            <input type="text" value={nom} onChange={handleNomChange} />
          </div>

          <div className='flex flex-col'>
            <label>Description :</label>
            <textarea value={description} onChange={handleDescriptionChange} />
          </div>

          <div className='flex flex-col'>
            <label>Ingrédients :</label>
            <input type="text" value={ingredientUn} onChange={handleIngredientUnChange} className='my-2'/>
            <input type="text" value={ingredientDeux} onChange={handleIngredientDeuxChange} className='my-2'/>
            <input type="text" value={ingredientTrois} onChange={handleIngredientTroisChange} className='my-2'/>
            <input type="text" value={ingredientQuatre} onChange={handleIngredientQuatreChange} className='my-2'/>
            <input type="text" value={ingredientCinq} onChange={handleIngredientCinqChange} className='my-2'/>
            <input type="text" value={ingredientSix} onChange={handleIngredientSixChange} className='my-2'/>
            <input type="text" value={ingredientSept} onChange={handleIngredientSeptChange} className='my-2'/>
            <input type="text" value={ingredientHuit} onChange={handleIngredientHuitChange} className='my-2'/>
            <input type="text" value={ingredientNeuf} onChange={handleIngredientNeufChange} className='my-2'/>
            <input type="text" value={ingredientDix} onChange={handleIngredientDixChange} className='my-2'/>
            
          </div>

          <div className='flex flex-col '>
            <label>Étapes :</label>
            <input type="text" value={etapeUn} onChange={handleEtapeUnChange} className='my-2'/>
            <input type="text" value={etapeDeux} onChange={handleEtapeDeuxChange} className='my-2'/>
            <input type="text" value={etapeTrois} onChange={handleEtapeTroisChange} className='my-2'/>
            <input type="text" value={etapeQuatre} onChange={handleEtapeQuatreChange} className='my-2'/>
            <input type="text" value={etapeCinq} onChange={handleEtapeCinqChange} className='my-2'/>
            <input type="text" value={etapeSix} onChange={handleEtapeSixChange} className='my-2'/>
            <input type="text" value={etapeSept} onChange={handleEtapeSeptChange} className='my-2'/>
            <input type="text" value={etapeHuit} onChange={handleEtapeHuitChange} className='my-2'/>
            <input type="text" value={etapeNeuf} onChange={handleEtapeNeufChange} className='my-2'/>
            <input type="text" value={etapeDix} onChange={handleEtapeDixChange} className='my-2'/>
          </div>

          <div className='flex flex-col'>
            <label>Catégorie :</label>
            <select value={categorie} onChange={handleCategorieChange}>
              <option value="">Sélectionnez une catégorie</option>
              <option value="petit-dejeuner">Petit-déjeuner</option>
              <option value="repas">Repas</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>

          <div className='flex flex-col'>
            <label>Image : </label>
            <input type="file" onChange={handleImageChange} />
          </div>

          <button type="submit" className='bg-blue-200 rounded-2xl p-2'>Créer la recette</button>
        </form>
        <Link to={`/`} style={{ textDecoration: 'none' }}>
            <button className="bg-blue-500 rounded-lg p-2 text-slate-200">Retour</button>
        </Link>

        {created &&
        
          <div className='flex flex-col items-center justify-center bg-lime-200 py-4 mt-4 rounded-2xl'>
            <p className='text-green-500 font-bold mb-3'>La recette a bien été crée !</p>
            <p className='text-green-500 font-bold'>Vous pouvez retourner à l'accueil</p>

          </div>
        }

      </div>
    );
  };

export default Create;
