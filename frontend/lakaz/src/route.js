import Home from './component/home/home';

import {createBrowserRouter} from "react-router-dom";

// Affectation des routes au endpoint correspondant avec page d'erreur par défaut
  
  const router = createBrowserRouter([
    
    { path: "/", element: <Home />},

  ]);

export default router;

