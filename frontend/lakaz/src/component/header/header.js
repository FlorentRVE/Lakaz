import React from "react";
import SearchBar from "./search_bar";
import MenuAdmin from "./menu_admin";

const Header = () => {
    return (

        <div className="flex flex-col items-center p-2 bg-green-400 rounded-b-2xl shadow-2xl">

            <div className="bg-yellow-300 w-[200px]">Logo</div>

            < MenuAdmin />
            
            < SearchBar />

            
            
        </div>
    );
}

export default Header;