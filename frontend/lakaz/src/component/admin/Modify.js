import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import {useState, useEffect} from "react";
import * as api from '../../utils/api';
import axios from "axios";

const Modify = () => {

  const token = localStorage.getItem('jwtToken'); // Récupération du Token

  const params = useParams();
  const id = params.id;

  // Création du state data qui va accueillir nos données
  const [data, setData] = useState([]);
  
  // Booléen pour l'affichage du message de modification de recette ou d'erreur
  const [modified, setmodified] = useState(false);
  const [error, seterror] = useState(false);

  // Création du state pour remplir le formulaire
  const [categorie, setCategorie] = useState('');
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const image = null;
  
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

  // ========== Setup des macros ================
  const [macroCal, setMacroCal] = useState('');
  const [macroProt, setMacroProt] = useState('');
  const [macroLip, setMacroLip] = useState('');
  const [macroGlu, setMacroGlu] = useState('');

  useEffect(() => {
    api.getRecipebyId(id).then((data) => {
      setData(data);
      
      setCategorie(data.Categorie);
      setNom(data.Nom);
      setDescription(data.Description);

      setIngredientUn(data.Ingredients[0])
      setIngredientDeux(data.Ingredients[1])
      setIngredientTrois(data.Ingredients[2])
      setIngredientQuatre(data.Ingredients[3])
      setIngredientCinq(data.Ingredients[4])
      setIngredientSix(data.Ingredients[5])
      setIngredientSept(data.Ingredients[6])
      setIngredientHuit(data.Ingredients[7])
      setIngredientNeuf(data.Ingredients[8])
      setIngredientDix(data.Ingredients[9])

      setEtapeUn(data.Etapes[0])
      setEtapeDeux(data.Etapes[1])
      setEtapeTrois(data.Etapes[2])
      setEtapeQuatre(data.Etapes[3])
      setEtapeCinq(data.Etapes[4])
      setEtapeSix(data.Etapes[5])
      setEtapeSept(data.Etapes[6])
      setEtapeHuit(data.Etapes[7])
      setEtapeNeuf(data.Etapes[8])
      setEtapeDix(data.Etapes[9])

      setMacroCal(data.Macros[0])
      setMacroProt(data.Macros[1])
      setMacroLip(data.Macros[2])
      setMacroGlu(data.Macros[3])


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
  
  const handleCategorieChange = (e) => {
    setCategorie(e.target.value);
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

// ========== Gestion des macros ================

const handleMacroCalChange = (e) => {
  setMacroCal(e.target.value);
}

const handleMacroProtChange = (e) => {
  setMacroProt(e.target.value);
}

const handleMacroLipChange = (e) => {
  setMacroLip(e.target.value);
}

const handleMacroGluChange = (e) => {
  setMacroGlu(e.target.value);
}


  // =============== Envoyer les données dans la requête POST ================
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    // Récupération des states pour les données
    const formData = {
      id: id,
      categorie: categorie,
      nom: nom,
      ingredients: [ingredientUn, ingredientDeux, ingredientTrois, ingredientQuatre, ingredientCinq, ingredientSix, ingredientSept, ingredientHuit, ingredientNeuf, ingredientDix],
      etapes: [etapeUn, etapeDeux, etapeTrois, etapeQuatre, etapeCinq, etapeSix, etapeSept, etapeHuit, etapeNeuf, etapeDix],
      macros: [macroCal, macroProt, macroLip, macroGlu],
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
        setmodified(true);
    
    })
    .catch((error) => {
        // Gérer les erreurs de la requête si nécessaire
        console.error(error);
        seterror(true);
    });
  
    };

    // ====================================
  
    return (
      <div>
        <h1 className='text-center text-2xl text-red-600 font-bold my-7 bg-green-400 p-4 rounded-xl uppercase shadow-xl'>Modifier recette</h1>
        <form onSubmit={handleSubmit} className='bg-lime-200 rounded-b-2xl p-4 flex flex-col gap-5 rounded-2xl shadow-xl'>
          <div className='flex flex-col'>
            <label className='font-bold text-red-500 uppercase mb-2'>Titre :</label>
            <input type="text" value={nom} onChange={handleNomChange} placeholder='Titre de la recette' className='p-2 rounded-xl' />
          </div>

          <div className='flex flex-col'>
            <label className='font-bold text-red-500 uppercase mb-2'>Description :</label>
            <textarea value={description} onChange={handleDescriptionChange} placeholder='Description de la recette' className='p-2 rounded-xl' />
          </div>

          <div className='flex flex-col'>
            <label className='font-bold text-red-500 uppercase mb-2'>Ingrédients :</label>
            <input type="text" value={ingredientUn} onChange={handleIngredientUnChange} placeholder='Ingrédients de la recette' className='my-2 p-2 rounded-xl'/>
            <input type="text" value={ingredientDeux} onChange={handleIngredientDeuxChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={ingredientTrois} onChange={handleIngredientTroisChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={ingredientQuatre} onChange={handleIngredientQuatreChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={ingredientCinq} onChange={handleIngredientCinqChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={ingredientSix} onChange={handleIngredientSixChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={ingredientSept} onChange={handleIngredientSeptChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={ingredientHuit} onChange={handleIngredientHuitChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={ingredientNeuf} onChange={handleIngredientNeufChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={ingredientDix} onChange={handleIngredientDixChange} className='my-2 p-2 rounded-xl'/>
            
          </div>

          <div className='flex flex-col '>
            <label className='font-bold text-red-500 uppercase mb-2'>Étapes :</label>
            <input type="text" value={etapeUn} onChange={handleEtapeUnChange} placeholder='Etapes de la recette' className='my-2 p-2 rounded-xl'/>
            <input type="text" value={etapeDeux} onChange={handleEtapeDeuxChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={etapeTrois} onChange={handleEtapeTroisChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={etapeQuatre} onChange={handleEtapeQuatreChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={etapeCinq} onChange={handleEtapeCinqChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={etapeSix} onChange={handleEtapeSixChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={etapeSept} onChange={handleEtapeSeptChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={etapeHuit} onChange={handleEtapeHuitChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={etapeNeuf} onChange={handleEtapeNeufChange} className='my-2 p-2 rounded-xl'/>
            <input type="text" value={etapeDix} onChange={handleEtapeDixChange} className='my-2 p-2 rounded-xl'/>
          </div>

          <div className='flex flex-col '>
            <label className='font-bold text-red-500 uppercase mb-2'>Macros :</label>
            <input type="text" value={macroCal} onChange={handleMacroCalChange} placeholder='Calories' className='my-2 p-2 rounded-xl'/>
            <input type="text" value={macroProt} onChange={handleMacroProtChange} placeholder='Proteines' className='my-2 p-2 rounded-xl'/>
            <input type="text" value={macroLip} onChange={handleMacroLipChange} placeholder='Lipides' className='my-2 p-2 rounded-xl'/>
            <input type="text" value={macroGlu} onChange={handleMacroGluChange} placeholder='Glucides' className='my-2 p-2 rounded-xl'/>
          </div>          

          <div className='flex flex-col'>
            <label className='font-bold text-red-500 uppercase mb-2'>Catégorie :</label>
            <select value={categorie} onChange={handleCategorieChange} className='p-2 rounded-xl'>
              <option value="">Sélectionnez une catégorie</option>
              <option value="petit-dejeuner">Petit-déjeuner</option>
              <option value="repas">Repas</option>
              <option value="collation">Collation</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>

          <button type="submit" className='bg-blue-500 rounded-2xl p-2 active:bg-yellow-500 text-slate-50'>Modifier la recette</button>
        </form>

        <div className='flex justify-between my-4'>
          <Link to={`/`} style={{ textDecoration: 'none' }}>
            <button className="bg-blue-500 rounded-lg p-2 text-slate-200 shadow-xl">Retour</button>
          </Link>

          <Link to={`/delete/${id}`} style={{ textDecoration: 'none' }}>
            <button className="bg-red-500 rounded-lg p-2 text-slate-200 shadow-xl">Supprimer la recette</button>
          </Link>
        </div>

        {modified &&
        
          <div className='flex flex-col items-center justify-center bg-lime-200 py-4 mt-4 rounded-2xl'>
            <p className='text-green-500 font-bold mb-3'>La recette a bien été modifiée !</p>
            <p className='text-green-500 font-bold'>Vous pouvez retourner à l'accueil</p>

          </div>
        }

        {error &&

          <div className='flex flex-col items-center justify-center bg-lime-200 py-4 mt-4 rounded-2xl'>
            <p className='text-red-500 font-bold mb-3'>Erreur de connexion !</p>

          </div>
        }

      </div>
    );
  };

export default Modify;
