import Home from './component/home/home';
import Recipe from './component/recipe.js/recipe';
import Error from './component/Error';

import {createBrowserRouter} from "react-router-dom";

// Affectation des routes au endpoint correspondant avec page d'erreur par défaut
  
  const router = createBrowserRouter([
    
    { path: "/", element: <Home />, errorElement:<Error />},

    { path: "/recette/:id", element: <Recipe />, errorElement:<Error />},

    { path: "/404", element: <Error />},

  ]);

export default router;

