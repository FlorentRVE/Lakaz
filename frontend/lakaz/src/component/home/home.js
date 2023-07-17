//=============================== Composant Home ==========================

import React from 'react';
import Header from '../header/header';
import HomeGrid from './home_grid';
import Footer from '../footer';
import Menu from './menu';
import { useState } from 'react';


const Home = () => {

  const [category, setCategory] = useState();

  return (

    <div className=''>

      < Header />

      < Menu onCategory={setCategory}/>
        
      < HomeGrid category={category}/>

      < Footer />
    
    </div>
  );
};

export default Home;
