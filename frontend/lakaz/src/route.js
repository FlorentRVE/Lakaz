import Home from './component/home/home';
import Recipe from './component/recipe.js/recipe';

import {createBrowserRouter} from "react-router-dom";

// Affectation des routes au endpoint correspondant avec page d'erreur par défaut
  
  const router = createBrowserRouter([
    
    { path: "/", element: <Home />},

    { path: "/recipe/:id", element: <Recipe />},

  ]);

export default router;

