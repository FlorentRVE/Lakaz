import React from "react";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = () => {

    return (

        <div className="flex justify-end items-center w-full">

            <form action="" className="flex w-full gap-2 p-3 justify-between">

                <input type="text" placeholder="Rechercher une recette.." className="flex-1 rounded-2xl"/>
                <button type="submit" className="bg-orange-400 rounded-2xl py-2 px-4 shadow-xl"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                
            </form>
            
        </div>
    );
    
}

export default SearchBar;