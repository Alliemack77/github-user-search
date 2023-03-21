import React,{ useContext } from 'react'
import { GithubContext } from '../context/context'
import { MdLocationOn } from 'react-icons/md'
import { FiLink } from 'react-icons/fi'
import { FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import sadKitty from '../assets/sad-kitty-search.jpg'

const UserCard = () => {
    const {githubUser, errorUser} = useContext(GithubContext)
    const {
        created_at,
        avatar_url, 
        login, 
        twitter_username, 
        name,
        bio, 
        public_repos, 
        followers, 
        following, 
        location,
        html_url, 
        email
    } = githubUser

    const date = new Date(created_at)
    const day = date.getDate()
    const month = new Date(created_at).toLocaleString("default", {month: 'short'})
    const year = date.getFullYear()

    if(errorUser) {
        return (
            <div>
                <img src={sadKitty}></img>
                <p>We've looked everywhere!</p>
                <p>There's no one here by that name. Try your search again.</p>
            </div>
        )
    }

    return (
        <div className="user">
            <img src={avatar_url} alt=""/>
            <p>{login}</p>
            <p>{twitter_username || name}</p>
            <p>Joined {day} {month} {year}</p>
            <p>{bio || "This profile has no bio."}</p>
            <div>
                <div>
                    <p>Repos</p>
                    <p>{public_repos}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Following</p>
                    <p>{following}</p>
                </div>
            </div>
            <div>
                <div>
                    <MdLocationOn />
                    <p>{location || "Earth"}</p>
                </div>
                <div>
                    <FiLink />
                    <a href={html_url}><p>{html_url}</p></a>
                </div>
                <div>
                    <FaTwitter />
                    <p>{twitter_username ? `@${twitter_username}` : "Not available"}</p>
                </div>
                <div>
                    <AiOutlineMail />
                    <p>{email || "Private"}</p>
                </div>
            </div>
        </div>     
    )  
}


export default UserCard