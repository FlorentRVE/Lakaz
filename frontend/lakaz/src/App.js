import router from './route';
import { RouterProvider } from "react-router-dom";

// Création de notre app à partir de route.js

const App = () => {

  return (

    < RouterProvider router={router} />

  );
}

export default App;