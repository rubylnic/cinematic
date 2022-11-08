import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import FilmItem from '../components/FilmItem';
import Pagination from '../components/Pagination';

const Films = (props) => {
    const [response, setResponse] = useState([]);
    const location = useLocation();
    // передается или type или genre
    let linkTypeLink = Object.keys(location.state)[0];
    const genreId = location.state.genreId;

    const params = useParams();
    const page = params.page;

    // тип можно передать напрямую компоненту или через state ссылки
    let type;
    // если данные передались по клику по ссылке
    if (location.state) {
        type = Object.values(location.state)[0];
    }
    // если напрямую компоненту
    if (props.type) {
        type = props.type;
    }
    const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ');
    // в зависимости от типа - разные url
    let apiLink;
    switch (linkTypeLink) {
        case 'type':
            apiLink = `${process.env.REACT_APP_MOVIEDB_URL}/movie/${type}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US&page=${page}`
            break;
        case 'genre':
            apiLink = `${process.env.REACT_APP_MOVIEDB_URL}/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreId}&with_watch_monetization_types=flatrate`
            break;
        default:
            console.error('the link type for film list is not defined')
    }

    useEffect(() => {
        axios.get(apiLink).then((res) => {
            setResponse(res.data)
        }).catch((err) => {
            console.error(err)
        })
    }, [location, apiLink])

    let { results = [], total_pages } = response;
    let currentPage = response.page;


    return (
        <div>
            <h1 className='text-3xl font-bold mb-10 text-center'>{typeCapitalized} films</h1>
            <div className='films grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 max-w-screen-xl mx-auto'>
                {results.map((item) => {
                    return (
                        <FilmItem key={item.id} film={item} to={`/cinematic/films/id${item.id}`} state={{ film: item }} />
                    )

                })}

            </div>
            <Pagination page={currentPage} totalPages={total_pages} type={type} genreId={genreId} />
        </div>
    );
};

export default Films;