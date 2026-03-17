import { Link } from 'react-router-dom';
import './pokemon.css'


function Pokemon({ name, image, id }) {

    return (
        <div className='pokemon' style={{ "--theme-color": "#3394d0" } }>
            <div className='pokemon-glow'></div>
            <div className='pokemon-content'>
            <Link to={`/pokemon/${id}`}>
                <div>
                    <img className='pokemon-image' src={image} />
                </div>
                <h2 className='pokemon-name'>{name}</h2>
            </Link>
            </div>
        </div>
    )
}

export default Pokemon;