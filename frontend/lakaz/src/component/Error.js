//=============================== Page Erreur ==========================

import { Link } from 'react-router-dom';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './header/logo';


const Error = () => {

    return (
    <div>
        < Logo/>
        <div className="flex flex-col items-center shadow-2xl p-8 rounded-2xl">
            <div className="flex flex-col items-center my-7">
                <p className="text-9xl">404</p>
                <FontAwesomeIcon icon={faTriangleExclamation} className='text-5xl text-red-600'/>
                <p className="my-4">Oups! La page que vous demandez n'existe pas</p>
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <button className="bg-red-600 rounded-2xl py-2 px-4 text-slate-200 shadow-xl hover:brightness-125 active:brightness-150 focus:outline-none focus:ring focus:ring-slate-100">Retourner à la page d'accueil</button>
            </Link>
        </div>
    </div>
    )

}

export default Error;