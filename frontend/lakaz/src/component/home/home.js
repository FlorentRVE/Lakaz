//=============================== Composant Home ==========================

import React from 'react';
import Header from '../header/header';
import HomeGrid from './home_grid';
import Footer from '../footer';
import Menu from './menu';
import { useState } from 'react';
import SearchBar from '../header/search_bar';


const Home = () => {

  const [category, setCategory] = useState();
  const [inputText, setInputText] = useState('');

  return (

    <div className=''>

      < Header />

      < SearchBar onInput={setInputText}/>

      < Menu onCategory={setCategory}/>
        
      < HomeGrid category={category} input={inputText}/>

      < Footer />
    
    </div>
  );
};

export default Home;
