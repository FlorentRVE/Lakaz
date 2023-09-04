import React from "react";
import MenuAdmin from "./menu_admin";
import { Link } from "react-router-dom";

const Logo = () => {


    return (

        <div className="flex flex-col items-center p-2 bg-green-400 shadow-2xl sticky top-0">

            < MenuAdmin />    

            <Link to="/" style={{ textDecoration: 'none' }}>
                <img src="/images/Recette_lakaz_logo.png" alt="logo" className="h-auto w-24"/>
            </Link>

                    
            
        </div>
    );
}

export default Logo;