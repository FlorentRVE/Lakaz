import React from "react";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
    const scrollToTop = () =>{
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        });
    };
  
    window.addEventListener('scroll', toggleVisible);

    return (

        <div className="bg-green-400 rounded-t-2xl flex justify-center">
            
            <Link to={`/`} style={{ textDecoration: 'none' }}>

            <button className="bg-yellow-500 rounded-2xl p-2 text-slate-200 w-20 m-4 hover:brightness-125 active:brightness-150 hover:-translate-y-1 transition ease-in-out" onClick={scrollToTop}><FontAwesomeIcon icon={faChevronUp}/></button>
            </Link>
        </div>

    );
}

export default Footer;