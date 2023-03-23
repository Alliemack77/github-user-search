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
        <div className="user-card">
            <img className="avatar" src={avatar_url} alt=""/>
            <div className="data">
                <div>
                    <p className="fs-500 fw-700">{login}</p>
                    <p className="text-accent ">{twitter_username || name}</p>
                </div>
                <p>Joined {day} {month} {year}</p>
            </div>
            <p className="bio">{bio || "This profile has no bio."}</p>
            <div className="github-stats">
                <div className="stat">
                    <p>Repos</p>
                    <p className="fs-500 fw-700">{public_repos}</p>
                </div>
                <div className="stat">
                    <p>Followers</p>
                    <p className="fs-500 fw-700">{followers}</p>
                </div>
                <div className="stat">
                    <p>Following</p>
                    <p className="fs-500 fw-700">{following}</p>
                </div>
            </div>
            <div className="icon-groups">
                <div className="icon-group">
                    <MdLocationOn />
                    <p>{location || "Earth"}</p>
                </div>
                <div className="icon-group">
                    <FiLink />
                    <a href={html_url}><p>{html_url}</p></a>
                </div>
                <div className="icon-group">
                    <FaTwitter />
                    <p>{twitter_username ? `@${twitter_username}` : "Not available"}</p>
                </div>
                <div className="icon-group">
                    <AiOutlineMail />
                    <p>{email || "Private"}</p>
                </div>
            </div>
        </div>     
    )  
}


export default UserCard