import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import {useState, useEffect} from "react";
import * as api from '../../utils/api';
import Footer from '../footer';
import { faCommentDots, faKitchenSet, faWheatAwnCircleExclamation, faScaleBalanced } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "../header/logo";

const Recipe = () => {
  
    const token = localStorage.getItem('jwtToken'); // Récupération du token JWT dans le localStorage
    
    const params = useParams();
    const id = params.id;

    const [data, setData] = useState([]); // Création du state data.
  
    useEffect(() => {
      api.getRecipebyId(id).then((data) => {
        setData(data); // On modifie data pour lui donner la valeur des données récupérées via getItem en utilisant l'ID.
      });
    }, [id]);

    let etapesList; // Va acceueillir nos étapes sous forme de <li>, elles seront rendu plus bas dans le composant
    let ingredientsList; // Va acceueillir nos ingrédients sous forme de <li>, elles seront rendu plus bas dans le composant
    let macrosList;
    let compteur = 0; // Compteur pour les keys id

    // On vérifie la validité de l'array Etapes puis on crée la liste des étapes
    if(data.Etapes) {
      etapesList = data.Etapes.map(item =>
      <li key={item + compteur++} className={ item ? "text-slate-900 my-4 list-decimal" : ""}>{item}</li>)
    }

    // On vérifie la validité de l'array Ingredients puis on crée la liste des ingrédients
    if(data.Ingredients) {
      ingredientsList = data.Ingredients.map(item =>
      <li key={item + compteur++} className= {item ? "text-slate-900 my-2 list-[square]" : ""}>{item}</li>)
    }

    // On vérifie la validité de l'array Macros puis on crée la liste des macros
    if(data.Macros) {
      macrosList = [
      <li key={data.Macros[0] + compteur++} className= {data.Macros[0] ? "text-blue-500 my-2 list-disc font-bold text-lg" : ""}>Calories : {data.Macros[0]}</li>,
      <li key={data.Macros[1] + compteur++} className= {data.Macros[1] ? "text-red-300 my-2 list-disc font-bold text-lg" : ""}>Protéines : {data.Macros[1]}</li>,
      <li key={data.Macros[2] + compteur++} className= {data.Macros[2] ? "text-yellow-300 my-2 list-disc font-bold text-lg" : ""}>Lipides : {data.Macros[2]}</li>,
      <li key={data.Macros[3] + compteur++} className= {data.Macros[3] ? "text-orange-400 my-2 list-disc font-bold text-lg" : ""}>Glucides : {data.Macros[3]}</li>,
      ]
    }
    // Note : Sans cette étape de vérification, le composant ne s'affiche pas car renvoi une erreur au premier rendu car l'array est vide à ce moment
    
    if(data === undefined) {
      return <Navigate to="/404" />; // Redirection vers la page d'erreur.
    }
    
    return (
        <div className="sm:w-3/4 sm:mx-auto">
                
          {/* ============================== Header ====================================== */}
          < Logo />
          
          <div className="flex flex-col items-center gap-2 justify-evenly mx-auto py-2 mb-4 bg-green-500 rounded-b-2xl">

            <Link to={`/`} style={{ textDecoration: 'none' }}>
                <button className="bg-slate-800 rounded-lg p-2 text-slate-200 w-24 hover:brightness-125 active:brightness-150 focus:outline-none focus:ring focus:ring-slate-100">Retour</button>
            </Link>


            {token && 
            
              <div className="flex w-[80%] justify-between">
                <Link to={`/modify/${id}`} style={{ textDecoration: 'none' }}>
                  <button className="bg-slate-800 rounded-lg p-2 text-slate-200 hover:brightness-125 active:brightness-150 focus:outline-none focus:ring focus:ring-slate-100">Modifier recette</button>
                </Link>

                <Link to={`/image/${id}`} style={{ textDecoration: 'none' }}>
                  <button className="bg-slate-800 rounded-lg p-2 text-slate-200 hover:brightness-125 active:brightness-150 focus:outline-none focus:ring focus:ring-slate-100">Modifier image</button>
                </Link>

              </div>
              
              }


          </div>

          {/* =========================== Titre et image =========================================== */}

          <h3 className="text-3xl uppercase text-red-500 text-center font-bold mt-10">{data.Nom}</h3>

          <img src={data.Image} alt="" className="w-3/4 mx-auto max-h-80 border-b-4 object-cover rounded-2xl mt-6"/>
          
          <p className="bg-green-500 my-5 rounded-lg px-2 py-1 w-32 mx-auto text-center">{data.Categorie}</p>

          {/* ======================== Description =========================================== */}

          <div key={data.id} className= "bg-yellow-200 mt-4 rounded-2xl p-4">

            <div className="flex mb-1">
              <h4 className="text-xl text-red-500 font-bold mx-2"><FontAwesomeIcon icon={faCommentDots} className="mr-2"/>Description</h4>
              <div className="flex-1 h-[2px] bg-red-400 self-center rounded-3xl mt-1"></div>

            </div>

            <p>{data.Description}</p>
          </div>

          {/* ========================== Ingredients ==================================== */}

          <div className="bg-green-300 mt-4 rounded-2xl p-4">

            <div className="flex mb-1">
              <h4 className="text-xl text-red-500 font-bold mx-2"><FontAwesomeIcon icon={faWheatAwnCircleExclamation} className="mr-2"/>Ingrédients</h4>
              <div className="flex-1 h-[2px] bg-red-400 self-center rounded-3xl mt-1"></div>

            </div>

            <ul className="p-5">{ingredientsList}</ul>

          </div>

          {/* ====================================== Etapes ==================================== */}

          <div className="bg-yellow-200 my-4 rounded-2xl p-4">
            
            <div className="flex mb-1">
              <h4 className="text-xl text-red-500 font-bold mx-2"><FontAwesomeIcon icon={faKitchenSet} className="mr-2"/>Etapes</h4>
              <div className="flex-1 h-[2px] bg-red-400 self-center rounded-3xl mt-1"></div>

            </div>

            <ol className="p-5 font-semibold">{etapesList}</ol>           

          </div>

          {/* ========================== Macros ==================================== */}

          <div className="bg-slate-700 my-4 rounded-2xl p-4">

            <div className="flex mb-1">
              <h4 className="text-xl text-red-500 font-bold mx-2"><FontAwesomeIcon icon={faScaleBalanced} className="mr-2"/>Macros</h4>
              <div className="flex-1 h-[2px] bg-red-400 self-center rounded-3xl mt-1"></div>

            </div>

            <ul className="p-5">{macrosList}</ul>

          </div>

          < Footer />
      

        </div>
    );
    
}

export default Recipe;