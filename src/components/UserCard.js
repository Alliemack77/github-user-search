import React,{ useContext } from 'react'
import { GithubContext } from '../context/context'
import { MdLocationOn, MdLocalPostOffice } from 'react-icons/md'
import { HiOfficeBuilding } from 'react-icons/hi'
import { FaTwitter } from 'react-icons/fa'
// import { MdLocalPostOffice } from 'react-icons/ai'
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
        email,
        hireable,
    } = githubUser

    const date = new Date(created_at)
    const day = date.getDate()
    const month = new Date(created_at).toLocaleString("default", {month: 'short'})
    const year = date.getFullYear()

    if(errorUser) {
        return (
            <div className="user-card">
                <img src={sadKitty} alt=""></img>
                <p className="login">We've looked everywhere!</p>
                <p className="twitter">There's no one here by that name.</p>
                <p className="bio">Try your search again.</p>
            </div>
        )
    }

    return (
        <div className="user-card">
            <img className="avatar" src={avatar_url} alt=""/>
            <p className="login fs-500 fw-700">{login}</p>
            <a className="twitter text-accent" href={html_url}>{name}</a>
            <p className="date">Joined {day} {month} {year}</p>
            <p className="bio">{bio || "This profile has no bio."}</p>
            <div className="github-stats">
                <div>
                    <p>Repos</p>
                    <p className="fs-500 fw-700">{public_repos}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p className="fs-500 fw-700">{followers}</p>
                </div>
                <div>
                    <p>Following</p>
                    <p className="fs-500 fw-700">{following}</p>
                </div>
            </div>
            <div className="location icon-group">
                <MdLocationOn />
                <p>{location || "Earth"}</p>
            </div>
            <div className="twitter-icon icon-group">
                <FaTwitter />
                <p>{twitter_username ? `@${twitter_username}` : "Not available"}</p>
            </div>
            <div className="email icon-group">
                <MdLocalPostOffice />
                <p>{email || "Private"}</p>
            </div>
            <div className="something icon-group">
                <HiOfficeBuilding />
                <p>{hireable === null ? "Private" : "Looking for work"}</p>
            </div>
        </div>     
    )  
}


export default UserCard