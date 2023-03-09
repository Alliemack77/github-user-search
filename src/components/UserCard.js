import { MdLocationOn } from 'react-icons/md'
import { FiLink } from 'react-icons/fi'
import { FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'


const UserCard = ({user}) => {
 console.log(user)
    return (
        <div>
            <img src={user.avatar_url} alt=""/>
            <p>{user.login}</p>
            <p>{user.name}</p>
            <p>{user.created_at}</p>
            <p>{user.bio ? user.bio : "This profile has no bio."}</p>
            <div>
                <div>
                    <p>Repos</p>
                    <p>{user.public_repos}</p>
                </div>
                <div>
                    <p>Followers</p>
                    <p>{user.followers}</p>
                </div>
                <div>
                    <p>Following</p>
                    <p>{user.following}</p>
                </div>
            </div>
            <div>
                <div>
                    <MdLocationOn />
                    <p>{user.location ? user.location : "private"}</p>
                </div>
                <div>
                    <FiLink />
                    <a href={user.html_url ? user.html_url : ""}><p>{user.html_url ? user.html_url : "private"}</p></a>
                </div>
                <div>
                    <FaTwitter />
                    <p>{user.twitter_username ? user.twitter_username : "not available"}</p>
                </div>
                <div>
                    <AiOutlineMail />
                    <p>{user.email ? user.email : "private"}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard