import React from "react";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import * as api from '../../utils/api';
import { useMemo } from "react";

const HomeGrid = ({category, input}) => {

  console.log('input from home ' + input);

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

          <Link key={item.id} to={`/recette/${item.id}`} style={{ textDecoration: 'none' }}>

            <div id={item.id} className= "bg-slate-400 rounded-2xl p-3 m-2 flex flex-col text-center">
                <img src="https://placehold.co/250" alt="" />
                <h3 className= ''>{item.Nom}</h3>
                <h3 className= ''>{item.Categorie}</h3>
                <p>{item.Description}</p>
            </div>
          </Link>
        ))}

    </div>
    )
    
}

export default HomeGrid;