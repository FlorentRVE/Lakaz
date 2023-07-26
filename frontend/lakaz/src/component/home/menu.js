import React from "react";

const Menu = ({onCategory}) => {


    function handleCategoryChange(event) {
        onCategory(event.target.value);
      }

    return (

        <div className="flex justify-evenly bg-green-200 gap-1 my-2 shadow-xl rounded-2xl">

            <button className="bg-slate-800  rounded-lg p-2 text-slate-200" onClick={handleCategoryChange} value={""}>Toutes les recettes</button>
            <button className="bg-yellow-800 rounded-lg p-2 text-slate-200" onClick={handleCategoryChange} value={"petit-dejeuner"}>Petit-déjeuner</button>
            <button className="bg-blue-800  rounded-lg p-2 text-slate-200" onClick={handleCategoryChange} value={"repas"}>Repas</button>
            <button className="bg-green-800  rounded-lg p-2 text-slate-200" onClick={handleCategoryChange} value={"dessert"}>Dessert</button>
            
        </div>
    );
    
}

export default Menu;