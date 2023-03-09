import { useState, useEffect } from 'react';
import './scss/main.scss'
import SearchBar from './components/Searchbar';
import UserCard from './components/UserCard';
const URL = "https://api.github.com/users/alliemack77"

function App() {
  const [githubUser, setgithubUser] = useState({})

  useEffect( () => {
      fetch(URL)
          .then(res => res.json())
          .then(data => setgithubUser(data))
  }, []) 

  return (
    <>
      <SearchBar />
      <UserCard user={githubUser}/>
    </>
    
  );
}

export default App;
