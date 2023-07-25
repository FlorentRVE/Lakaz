import React from "react";
import SearchBar from "./search_bar";
import MenuAdmin from "./menu_admin";

const Header = () => {
    return (

        <div className="flex flex-col">

            < SearchBar />
            <MenuAdmin />

            
            
        </div>
    );
}

export default Header;