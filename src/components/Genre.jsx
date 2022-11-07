import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader';


export default function Genre({ genre }) {
    const [img, setImg] = useState('');
    const apiLink = `${process.env.REACT_APP_MOVIEDB_URL}/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre.id}&with_watch_monetization_types=flatrate`;
    useEffect(() => {
        axios.get(apiLink).then((res) => {
            setImg(res.data.results[10].poster_path)
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    return (
        <Link to={`/films/${genre.name.toLowerCase()}/1`} state={{ genre: genre.name.toLowerCase(), id: genre.id }} className="block hover:opacity-75 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 p-5 min-h-65 relative">
            <div className='text-m font-bold mb-1 text-center text-gray lowercase'>{genre.name}</div>
            {img ? <img src={`${process.env.REACT_APP_POSTER + img}`} /> : <Loader />}
        </Link>
    )
}
