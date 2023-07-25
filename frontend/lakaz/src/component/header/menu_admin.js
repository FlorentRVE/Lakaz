import React from "react";
import { Link } from "react-router-dom";

const MenuAdmin = () => {

    const token = localStorage.getItem('jwtToken');

    const logout = ()=> {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }

    return (


        <div className="bg-red-200 flex justify-center gap-4">
        
        {token &&    

                <Link to={`/create`} style={{ textDecoration: 'none' }}>
                    <button className="bg-orange-400 rounded-lg p-2 text-slate-200">Créer recette</button>
                </Link>               
                  
        }

        {token &&    
            
            <Link to={`/`} style={{ textDecoration: 'none' }}>
                <button className="bg-red-400 rounded-lg p-2 text-slate-200" onClick={logout}>LogOut</button>
            </Link>               
              
        }   
            
        </div>
    );
    
}

export default MenuAdmin;