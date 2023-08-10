import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import {useState, useEffect} from "react";
import * as api from '../../utils/api';
import Header from '../header/header';
import Footer from '../footer';
import { faCommentDots, faKitchenSet, faWheatAwnCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Recipe = () => {

    const params = useParams();
    const id = params.id;

    const [data, setData] = useState([]); // Création du state data.
  
    useEffect(() => {
      api.getRecipebyId(id).then((data) => {
        setData(data); // On modifie data pour lui donner la valeur des données récupérées via getItem en utilisant l'ID.
      });
    }, [id]);

    const token = localStorage.getItem('jwtToken');

    if(data === undefined) {
        return <Navigate to="/404" />; // Redirection vers la page d'erreur si ID non présent dans le json.
      }

    return (
        <div className="sm:w-3/4 sm:mx-auto">
                
                {/* ============================== Header ====================================== */}
                < Header />
                
                <div className="flex flex-col items-center gap-2 justify-evenly mx-auto py-2 mb-4 bg-green-500 rounded-b-2xl sticky top-[120px]">

                  <Link to={`/`} style={{ textDecoration: 'none' }}>
                      <button className="bg-slate-800 rounded-lg p-2 text-slate-200 w-24 hover:brightness-125 active:brightness-150 focus:outline-none focus:ring focus:ring-slate-100">Retour</button>
                  </Link>

                  <div className="flex flex-col items-center gap-2">
                    {token &&        
                      <Link to={`/modify/${id}`} style={{ textDecoration: 'none' }}>
                        <button className="bg-slate-800 rounded-lg p-2 text-slate-200 w-24 hover:brightness-125 active:brightness-150 focus:outline-none focus:ring focus:ring-slate-100">Modifier</button>
                      </Link>
                    
                  }

                  </div>

                </div>

                {/* =========================== Titre et image =========================================== */}

                <h3 className="text-3xl uppercase text-red-500 text-center font-bold mt-10">{data.Nom}</h3>

                <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className="w-3/4 mx-auto max-h-80 border-b-4 object-cover rounded-2xl mt-6"/>
                
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

                  <p>{data.Ingredients}</p>

                </div>

                {/* ====================================== Etapes ==================================== */}

                <div className="bg-yellow-200 my-4 rounded-2xl p-4">
                  
                  <div className="flex mb-1">
                    <h4 className="text-xl text-red-500 font-bold mx-2"><FontAwesomeIcon icon={faKitchenSet} className="mr-2"/>Etapes</h4>
                    <div className="flex-1 h-[2px] bg-red-400 self-center rounded-3xl mt-1"></div>

                  </div>

                  
                  <p>{data.Etapes}</p>

                </div>

                < Footer />
            

        </div>
    );
    
}

export default Recipe;