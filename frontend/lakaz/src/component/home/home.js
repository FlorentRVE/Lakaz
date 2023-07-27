//=============================== Composant Home ==========================

import React from 'react';
import Header from '../header/header';
import HomeGrid from './home_grid';
import Footer from '../footer';
import Menu from '../header/menu';
import { useState } from 'react';
import SearchBar from '../header/search_bar';


const Home = () => {

  const [category, setCategory] = useState();
  const [inputText, setInputText] = useState('');

  return (

    <div>

      <div className='sticky top-0 z-50'>

        < Header />

        < SearchBar onInput={setInputText}/>

        < Menu onCategory={setCategory}/>

      </div>
      
      <div className='w-4/5 mx-auto rounded-2xl shadow-xl'>
      < HomeGrid category={category} input={inputText}/>

      </div>

      < Footer />
    
    </div>
  );
};

export default Home;
