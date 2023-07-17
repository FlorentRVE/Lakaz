import React from "react";
import { useParams, Navigate } from "react-router-dom";
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

    if(data === undefined) {
        return <Navigate to="/404" />; // Redirection vers la page d'erreur si ID non présent dans le json.
      }

    return (
        <div className="bg-red-400 rounded-2xl p-3 m-2">

                <div key={data.id} className= "bg-slate-400 rounded-2xl p-3 m-2 flex flex-col text-center">
                    <img src="https://placehold.co/250" alt="" />
                    <p>{data.Description}</p>
                    <h3 className= ''>{data.Nom}</h3>
                </div>
            

        </div>
    );
    
}

export default Recipe;