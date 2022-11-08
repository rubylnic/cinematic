import { useEffect, useState } from 'react'
import axios from 'axios'
import FilmItem from './FilmItem';

export default function Search() {
    const [value, setValue] = useState('');
    const [response, setResponse] = useState('')
    const apiLink = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US&query=${value}&page=1&include_adult=false`;

    useEffect(() => {
        if (value) {
            axios.get(apiLink).then((res) => {
                setResponse(res.data)
            }).catch((err) => {
                console.error(err)
            })
        } else {
            setResponse('')
        }
    }, [value])
    const { results = [] } = response;

    return (
        <div>
            <div className='mb-10'>
                <label className="block text-xl font-medium text-gray-700" htmlFor='search'>Search</label>
                <input type="text" placeholder='What film do you want to find?' value={value} onChange={(e) => { setValue(e.target.value) }} name='search' id='search' className="mt-1 block w-full rounded-md p-2 border-gray-300 border-2 shadow-m focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>

            <div className='films grid grid-cols-4 gap-4 mb-10'>
                {results.map((item) => {
                    return (
                        <FilmItem key={item.id} film={item} to={`/cinematic/films/id${item.id}`} state={{ film: item }} />
                    )

                })}

            </div>
        </div>
    )
}
