import Home from './component/home/home';
import Recipe from './component/recipe.js/recipe';
import Error from './component/Error';
import Login from './component/admin/login';
import Admincreate from './component/admin/adminCreate';
import Adminmodify from './component/admin/adminModify';
import Admindelete from './component/admin/adminDelete';

import {createBrowserRouter} from "react-router-dom";

// Affectation des routes au endpoint correspondant avec page d'erreur par défaut
  
  const router = createBrowserRouter([
    
    { path: "/", element: <Home />, errorElement:<Error />},

    { path: "/recette/:id", element: <Recipe />, errorElement:<Error />},

    { path: "/login", element: <Login />, errorElement:<Error />},

    { path: "/create", element: <Admincreate />, errorElement:<Error />},

    { path: "/modify/:id", element: <Adminmodify />, errorElement:<Error />},

    { path: "/delete/:id", element: <Admindelete />, errorElement:<Error />},

    { path: "/404", element: <Error />},

  ]);

export default router;

