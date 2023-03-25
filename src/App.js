import React, { useState } from 'react';
import './scss/main.scss'
import SearchBar from './components/Searchbar'
import UserCard from './components/UserCard'
import Header from './components/Header';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  
  return (
    <main className={`${isDarkMode ? 'dark' : 'light'}`}>
      <article className="container">
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <SearchBar />
        <UserCard />
      </article>
    </main>
    
  );
}

export default App;

