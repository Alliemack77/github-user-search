import React, { useContext } from 'react';
import './scss/main.scss'
import SearchBar from './components/Searchbar'
import UserCard from './components/UserCard'
import { ThemeContext } from './context/themeContext';

function App() {
  
  const isDarkMode = useContext(ThemeContext) 

  console.log(isDarkMode)


  return (
    <div className={`container ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>devfinder</h1>
      <SearchBar />
      <UserCard />
    </div>
    
  );
}

export default App;

