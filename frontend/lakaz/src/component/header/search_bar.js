import React from "react";

const SearchBar = () => {

    return (

        <div className="bg-red-200 flex justify-end">

            <form action="">
                <input type="text" placeholder="Search.."/>
                <button type="submit">Search</button>
            </form>
            
        </div>
    );
    
}

export default SearchBar;