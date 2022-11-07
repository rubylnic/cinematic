import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import FilmItem from '../components/FilmItem';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';

const Films = (props) => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true)
    const location = useLocation();
    const page = location.state.page ? location.state.page : 1;

    // передается или type или genre
    let linkTypeLink = Object.keys(location.state)[0];
    if (location.state.genreId) {
        linkTypeLink = 'genre';
    }

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
    console.log(page)
    const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ');

    let options = {};

    useEffect(() => {
        axios.request(options).then((res) => {
            setResponse(res.data);
            setLoading(false);
        }).catch((err) => {
            console.error(err)
        })
    }, [location])

    let { results = [], total_pages } = response;
    let currentPage = response.page;
    console.log(linkTypeLink)

    // в зависимости от типа - разные url
    switch (linkTypeLink) {
        case 'type':
            options = {
                method: 'GET',
                url: 'http://localhost:8000/type',
                params: { type: type, page: page }
            }
            break;
        case 'genre':
            options = {
                method: 'GET',
                url: 'http://localhost:8000/genre',
                params: { id: location.state.id, page: page }
            }
            break;
        default:
            console.error('the link type for film list is not defined')
    }

    return (
        <div>
            <h1 className='text-3xl font-bold mb-10 text-center'>{typeCapitalized} films</h1>
            {loading ? <Loader /> : <div className='films grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 max-w-screen-xl mx-auto'>
                {results.map((item) => {
                    return (
                        <FilmItem key={item.id} film={item} to={`/films/id${item.id}`} state={{ film: item }} />
                    )

                })}
                <Pagination page={currentPage} totalPages={total_pages} type={type} genre={type} genreId={location.state.id} />

            </div>}

        </div>
    );
};

export default Films;