
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Genre from '../components/Genre';

export default function Genres() {
    const [response, setResponse] = useState([]);
    const location = useLocation();
    const apiLink = `${process.env.REACT_APP_MOVIEDB_URL}genre/movie/list?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US`
    useEffect(() => {
        axios.get(apiLink).then((res) => {
            setResponse(res.data)
        }).catch((err) => {
            console.error(err)
        })
    }, [])

    const { genres = [] } = response;

    return (
        <div>
            <h1 className='text-3xl font-bold mb-10 text-center'>Genres</h1>
            <div className='genres grid grid-cols-2 gap-5 md:grid-cols-5'>
                {genres.map((item) => {
                    return (
                        <Genre genre={item} key={item.id} />
                    )
                })}
            </div>
        </div>

    )
}
