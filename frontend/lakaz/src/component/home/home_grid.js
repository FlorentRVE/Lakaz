import React from "react";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import * as api from '../../utils/api';
import { useMemo } from "react";

const HomeGrid = ({category, input}) => {


    const [data, setData] = useState([]); // Création du state data qui va accueillir nos données. 
  
    useEffect(() => {
      api.getData().then((data) => { // Récupération des données avec getData().
        setData(data); // On modifie data pour lui donner la valeur des données récupérées via getData.
      });
    }, []);

    function searchFilter() { // Retourne une liste filtrée via l'input et catégorie

      let finalData;

      if(!category) {
        finalData = data; // Si pas de catégorie sélectionnée on retourne les données au complet
      } else {
        finalData = data.filter((item) => item.Categorie === category); // Sinon on filtre selon la catégorie
      }
    
      if (input === '') {
          return finalData; // Si pas de nom on retourne les données précédentes
      }
      return finalData.filter((item) => item.Nom.toLowerCase().includes(input)) // Sinon on ajuste en fonction de l'input de la search barre
    }

    // Permet de recalculer la liste seulement si input, category ou data changent
    let filteredList = useMemo(searchFilter, [input, category, data]); 
    
    // Puis on utilise filteredList.map() pour parcourir et manipuler les données.
    return (

    <div className= 'flex flex-wrap justify-center'>

        {filteredList.map((item) => (

          <Link key={item.id} to={`/recette/${item.id}`} style={{ textDecoration: 'none'}}>

            <div id={item.id} className= "relative rounded-2xl m-4 h-[400px] w-[300px] shadow-xl hover:scale-105 transition ease-in-out delay-150 hover:brightness-110" style={{ backgroundImage: `url(${item.Image})`, backgroundSize: 'cover'}}>
                <p className= 'bg-green-500 rounded-r-2xl p-2 absolute top-5 left-0 w-1/2 bg-opacity-90 text-slate-900 text-lg text-center uppercase'>{item.Categorie}</p>
                <h2 className= 'absolute top-[300px] text-2xl text-slate-100 font-semibold ml-5'>{item.Nom}</h2>
            </div>
          </Link>
        ))}

    </div>
    )
    
}

export default HomeGrid;