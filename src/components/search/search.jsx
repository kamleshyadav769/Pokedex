
import { useNavigate } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';
import './search.css';

function Search({updateSearchTerm}) {
    const navigate = useNavigate();
    const debouncedCallback = useDebounce((value) => {
        
        updateSearchTerm(value)
        if (value) {
            navigate(`/pokemon/${value}`); // ✅ URL change
        } else {
            navigate(`/`); // optional reset
        }
    })


    return (
       
        <div className="search-wrapper">
           { /*<Link to={`/pokemon/${value}`}>  this link tag is not suitable here bucause my search is automatcally fetch the data AUR LINK TAG KI PROPERTY HAI KI JB IS PR KOI EVENT HOGA TABHI LINK TAG EXECUTE HOGA*/}
           {/*THEREFORE HMM  USENAVIGATE KA USE KRENGE */}
            <input 
                id="pokemon-name-search"
                type="text"
                placeholder="pokemon name...."
                onChange={(e) => debouncedCallback(e.target.value)}
            />
    {/*</Link>*/}
        </div>
      
    );
}

export default Search;