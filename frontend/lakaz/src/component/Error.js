//=============================== Page Erreur ==========================

import { Link } from 'react-router-dom';
import Header from './header/header';


const Error = () => {

    return (
    <div>
        <div className="">
            < Header/>
            <div className="">
                <p className="">404</p>
                <p className="">Oups! La page que vous demandez n'existe pas</p>
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}><p className="">Retourner sur la page d'accueil</p></Link>
        </div>
    </div>
    )

}

export default Error;