import React from "react";
import MenuAdmin from "./menu_admin";

const Header = () => {


    return (

        <div className="flex flex-col items-center p-2 bg-green-400 shadow-2xl sticky">

            <div className="bg-yellow-300 w-[200px]">Logo</div>

            < MenuAdmin />            
            
        </div>
    );
}

export default Header;