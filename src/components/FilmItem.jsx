import Loader from './Loader'
import RatingBadge from './RatingBadge';
import { Link } from 'react-router-dom';
import FavButton from './FavButton';


export default function FilmItem({ film, to }) {
    const img = film.poster_path;
    return (
        <Link to={to} state={{ id: film.id }} className='h-96'>
            <div className='film__item hover:opacity-75 transition-opacity duration-1000 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 h-full xl:aspect-h-8 p-5 pt-7 relative'>
                <div className='film__item-top h-full'>
                    <h2 className='text-xl font-bold mb-1 text-ellipsis whitespace-nowrap overflow-hidden'>{film.title} ({film.release_date?.slice(0, 4)})</h2>
                    <h3 className='text-xs mb-1 whitespace-nowrap overflow-hidden'>{film.original_title}</h3>
                    <RatingBadge rating={film.vote_average} />
                    <div className='img-container'>{img ? <img className='h-full w-full object-cover object-center group-hover:opacity-75' src={`${process.env.REACT_APP_POSTER + img}`} /> : <Loader />}</div>
                </div>
                <div className="film__item-bottom h-full w-full opacity-0 hover:opacity-100 transition-opacity duration-1000 absolute top-0 left-0 flex justify-center items-center">
                    <FavButton film={film} />
                </div>
            </div>
        </Link>
    )
}
