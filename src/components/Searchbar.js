import { CiSearch } from 'react-icons/ci';
import Button from './Button';


const sumbmitSearch = (e) => {
    e.preventDefault();

    console.log("Form Submitted!")
}


const SearchBar = () => {
    return (
        <form>
            <div>
                <CiSearch />
                <input 
                    type="text" 
                    placeholder='Search GitHub username...'/>
            </div>
            <Button onClick={sumbmitSearch}/>
        </form>
    )
}

export default SearchBar