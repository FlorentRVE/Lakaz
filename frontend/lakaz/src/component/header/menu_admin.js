import React from "react";
import { Link } from "react-router-dom";

const MenuAdmin = () => {

    const token = localStorage.getItem('jwtToken');

    const logout = ()=> {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    return (


        <div className="flex justify-between items-center w-full my-2 ">
        
        {token &&    

                <Link to={`/create`} style={{ textDecoration: 'none' }}>
                    <button className="bg-orange-400 rounded-2xl py-2 px-4 text-slate-200 shadow-xl">Créer recette</button>
                </Link>               
                  
        }

        {token &&    
            
            <Link to={`/`} style={{ textDecoration: 'none' }}>
                <button className="bg-red-600 rounded-2xl py-2 px-4 text-slate-200 shadow-xl" onClick={logout}>LogOut</button>
            </Link>               
              
        }   
            
        </div>
    );
    
}

export default MenuAdmin;