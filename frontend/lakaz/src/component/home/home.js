//=============================== Composant Home ==========================

import React from 'react';
import Header from '../header/header';
import HomeGrid from './home_grid';
import Footer from '../footer';


const Home = () => {

  return (

    <div className=''>

      <Header />
        
      <HomeGrid />

      < Footer />
    
    </div>
  );
};

export default Home;
