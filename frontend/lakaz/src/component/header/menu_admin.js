import React from "react";
import { Link } from "react-router-dom";

const MenuAdmin = () => {

    const token = localStorage.getItem('jwtToken');

    const logout = ()=> {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    return (


        <div className="flex justify-between items-center w-[92%] mb-2">
        
        {token &&    

                <Link to={`/create`} style={{ textDecoration: 'none' }}>
                    <button className="bg-orange-400 rounded-2xl py-2 px-4 text-slate-200 shadow-xl hover:brightness-125 active:brightness-150 focus:outline-none focus:ring focus:ring-slate-100">Créer recette</button>
                </Link>               
                  
        }

        {token &&    
            
            <Link to={`/`} style={{ textDecoration: 'none' }}>
                <button className="bg-red-600 rounded-2xl py-2 px-4 text-slate-200 shadow-xl hover:brightness-125 active:brightness-150 focus:outline-none focus:ring focus:ring-slate-100" onClick={logout}>Se déconnecter</button>
            </Link>               
              
        }   
            
        </div>
    );
    
}

export default MenuAdmin;