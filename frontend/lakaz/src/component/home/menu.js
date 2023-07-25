import React from "react";

const Menu = ({onCategory}) => {


    function handleCategoryChange(event) {
        onCategory(event.target.value);
      }

    return (

        <div className="flex justify-evenly bg-slate-200">

            <button className="bg-yellow-800 rounded-lg p-2 text-slate-200" onClick={handleCategoryChange} value={"petit-dejeuner"}>Petit-déjeuner</button>
            <button className="bg-blue-800  rounded-lg p-2 text-slate-200" onClick={handleCategoryChange} value={"repas"}>Repas</button>
            <button className="bg-green-800  rounded-lg p-2 text-slate-200" onClick={handleCategoryChange} value={"dessert"}>Dessert</button>
            <button className="bg-slate-800  rounded-lg p-2 text-slate-200" onClick={handleCategoryChange} value={""}>Toutes les recettes</button>
            
        </div>
    );
    
}

export default Menu;