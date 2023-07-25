import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import {useState, useEffect} from "react";
import * as api from '../../utils/api';

const Recipe = () => {

    const params = useParams();
    const id = params.id;

    const [data, setData] = useState([]); // Création du state data.
  
    useEffect(() => {
      api.getRecipebyId(id).then((data) => {
        setData(data); // On modifie data pour lui donner la valeur des données récupérées via getItem en utilisant l'ID.
      });
    }, [id]);

    console.log(data);

    const token = localStorage.getItem('jwtToken');

    if(data === undefined) {
        return <Navigate to="/404" />; // Redirection vers la page d'erreur si ID non présent dans le json.
      }

    return (
        <div className="p-4">

                <div className="flex justify-between">

                <Link to={`/`} style={{ textDecoration: 'none' }}>
                    <button className="bg-blue-500 rounded-lg p-2 text-slate-200">Retour</button>
                </Link>

                <div className="flex flex-col items-center gap-2">
                  {token &&        
                    <Link to={`/modify/${id}`} style={{ textDecoration: 'none' }}>
                      <button className="bg-yellow-500 rounded-lg p-2 text-slate-200">Modifier</button>
                    </Link>
                  
                  }

                </div>

                </div>

                <img src="https://placehold.co/250" alt="" className="w-full max-h-80 border-b-4"/>

                <div key={data.id} className= "bg-red-200 rounded-2xl p-4 flex flex-col items-center">
                    <h3 className="text-2xl uppercase text-red-700">{data.Nom}</h3>
                    <p className="bg-green-500 mt-5 rounded-xl px-2 py-1 self-start">{data.Categorie}</p>
                    <p>{data.Description}</p>
                </div>

                <div className="bg-yellow-200 mt-5 rounded-2xl p-4">
                  <p>{data.Ingredients}</p>

                </div>

                <div className="bg-green-200 mt-5 rounded-2xl p-4">
                  <p>{data.Etapes}</p>

                </div>
            

        </div>
    );
    
}

export default Recipe;