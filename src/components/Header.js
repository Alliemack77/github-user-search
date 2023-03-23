import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs' 

const Header = ({isDarkMode, setIsDarkMode}) => {
    return (
        <header className="user-header">
            <h1>devfinder</h1>
            <button className="btn theme-toggle" type="button">
                { isDarkMode ? <p>light</p> :  <p>dark</p>  }
                { isDarkMode ? <BsFillSunFill/> :  <BsFillMoonFill /> }
                <span className="sr-only">dark mode toggle</span>
            </button>
        </header>
        
    )
}

export default Header;