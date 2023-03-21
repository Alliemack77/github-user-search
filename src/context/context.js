import { createContext, useState } from "react";
import mockUser from '../mock-data/mockUser'
import axios from 'axios'


const GithubContext = createContext();

const GithubProvider = ({children}) => {
    const [githubUser, setgithubUser] = useState(mockUser)
    const [errorUser, seterrorUser] = useState(false)

    const searchGitHubUser =  (user) => {
      const options = {
        method: 'GET', 
        url: `https://api.github.com/users/${user}`, 
      }

      axios.request(options).then((response) => {
        setgithubUser(response.data)
        seterrorUser(false)
        console.log(response.data, errorUser)
      }).catch((err) => {
        seterrorUser(true)
        console.log(err, errorUser)
      })
    }

    return (
        <GithubContext.Provider value={{githubUser, errorUser, searchGitHubUser}}>
            {children}
        </GithubContext.Provider>
    )
}

export {GithubContext, GithubProvider}