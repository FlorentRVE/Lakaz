import React from "react";
import { faBowlRice } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faIceCream } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = ({onCategory}) => {


    function handleCategoryChange(event) {
        onCategory(event.target.value);
      }

    return (

        <div className="flex justify-evenly bg-green-500 gap-1 mb-10 shadow-2xl rounded-b-xl py-4 px-2">
            

            <button className="bg-slate-800 shadow-2xl  rounded-2xl p-2 text-slate-200 w-52 hover:brightness-125 active:brightness-150 focus:outline-none focus:ring focus:ring-slate-100" onClick={handleCategoryChange} value={""}><FontAwesomeIcon icon={faUtensils} className="mr-2"/>Toutes les recettes</button>
            <button className="bg-yellow-500 shadow-2xl rounded-2xl p-2 text-slate-200 w-52 hover:brightness-125 active:brightness-150 focus:outline-none focus:ring focus:ring-slate-100" onClick={handleCategoryChange} value={"petit-dejeuner"}><FontAwesomeIcon icon={faMugHot} className="mr-2" />Petit-déjeuner</button>
            <button className="bg-blue-500 shadow-2xl  rounded-2xl p-2 text-slate-200 w-52 hover:brightness-125 active:brightness-150 focus:outline-none focus:ring focus:ring-slate-100" onClick={handleCategoryChange} value={"repas"}><FontAwesomeIcon icon={faBowlRice} className="mr-2" />Repas</button>
            <button className="bg-red-400 shadow-2xl  rounded-2xl p-2 text-slate-200 w-52 hover:brightness-125 active:brightness-150 focus:outline-none focus:ring focus:ring-slate-100" onClick={handleCategoryChange} value={"dessert"}><FontAwesomeIcon icon={faIceCream} className="mr-2" />Dessert</button>
            
        </div>
    );
    
}

export default Menu;