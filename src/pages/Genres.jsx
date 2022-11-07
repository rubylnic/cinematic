
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Genre from '../components/Genre';

export default function Genres() {
    const [response, setResponse] = useState([]);
    const options = {
        method: 'GET',
        url: 'http://localhost:8000/genres',
    }
    useEffect(() => {
        axios.request(options).then((res) => {
            setResponse(res.data);
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
