import React from "react";
import Menu from "./menu";
import SearchBar from "./search_bar";

const Header = () => {
    return (

        <div className="flex flex-col">

            < SearchBar />
            
            < Menu />

            
            
        </div>
    );
}

export default Header;