//=============================== Composant Home ==========================

import React from 'react';
import HomeGrid from './home_grid';
import Footer from '../footer';
import Menu from '../header/menu';
import { useState } from 'react';
import SearchBar from '../header/search_bar';
import Logo from '../header/logo';


const Home = () => {

  const [category, setCategory] = useState();
  const [inputText, setInputText] = useState('');

  return (

    <div>

      <header className='sticky top-0 z-50'>

        < Logo />

        < SearchBar onInput={setInputText}/>

        < Menu onCategory={setCategory}/>

      </header>
      
      <body className='w-4/5 mx-auto rounded-2xl shadow-xl'>

        < HomeGrid category={category} input={inputText}/>

      </body>

      < Footer />
    
    </div>
  );
};

export default Home;
