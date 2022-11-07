
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import FilmItem from '../components/FilmItem';

export default function Favourites() {
    let { filmsInFavs } = useSelector(state => state.favsReducer);

    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold mb-10 text-center text-red-800'>Your favourite films</h1>

                {filmsInFavs.length > 0 ?
                    <div className='films grid grid-cols-4 gap-4 mb-10'>{filmsInFavs.map((item) => (
                        <FilmItem film={item} to={`/films/id${item.id}`} state={{ film: item }} />
                    ))}
                    </div> :
                    <>
                        <div className='text-center text-xl text-semi-bold mb-3'>There's no favourite films yet</div>
                        <Link
                            to="/"
                            className='bg-teal-800 text-white px-2 py-2 rounded-md text-m font-medium hover:bg-teal-800 block w-fitcontent mx-auto'
                            end
                        >
                            Go to Home page to explore
                        </Link>
                    </>}


            </div>
        </div>
    )
}
