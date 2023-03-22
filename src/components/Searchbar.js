import React, { useContext, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Button from './Button';
import { GithubContext } from '../context/context';


const SearchBar = () => {
    const [user, setUser] = useState("")
    const {searchGitHubUser}  = useContext(GithubContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        searchGitHubUser(user)
        setUser("")
    }

    return (
        <form onSubmit={handleSubmit} className="search-bar"> 
            <div className="form-control">
                <CiSearch />
                <input 
                    value={user}
                    onChange={(e)=> {setUser(e.target.value)}}
                    type="search" 
                    placeholder='Search GitHub...'/>
            </div>
            <Button type="submit" text="Search"/>
        </form>
    )
}

export default SearchBar