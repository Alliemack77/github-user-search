import React, { useContext, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Button from './Button';
import { GithubContext } from '../context/context';


const SearchBar = () => {
    const [user, setUser] = useState("")
    const {searchGitHubUser}  = useContext(GithubContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Clicked")
        searchGitHubUser(user)
        setUser("")
    }

    return (
        <form onSubmit={handleSubmit} className="flex"> 
            <div>
                <CiSearch />
                <input 
                    value={user}
                    onChange={(e)=> {setUser(e.target.value)}}
                    type="text" 
                    placeholder='Search GitHub username...'/>
            </div>
            <Button type="submit" text="Search"/>
        </form>
    )
}

export default SearchBar