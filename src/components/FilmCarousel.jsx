import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FilmItem from './FilmItem';
import Carousel from './Carousel';

const FilmCarousel = (props) => {
    const [response, setResponse] = useState([]);
    const [slidesToShow, setSlidesToShow] = useState(2)
    const type = props.type;

    useEffect(() => {
        axios.request(options).then((res) => {
            setResponse(res.data);
        }).catch((err) => {
            console.error(err)
        })

        if (window.screen.availWidth < 500) {
            setSlidesToShow(1)
        } else if (window.screen.availWidth > 770) {
            setSlidesToShow(2)
        }
    }, [])

    let { results = [] } = response;

    // в зависимости от типа - разные url
    let options;
    // пока только 2 варианта слайдеров - с похожими фильмами и по типу (популярные и т.д.)
    if (props.similar) {
        options = {
            method: 'GET',
            url: 'http://localhost:8000/similar',
            params: { similar: true, id: props.id }
        }

    } else {
        options = {
            method: 'GET',
            url: `http://localhost:8000/type`,
            params: { type: type }
        }
    }
    const typeCapitalized = type ? type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ') : '';

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        lazyload: true
    };
    return (
        <div className='px-10 mb-10'>
            <h1 className='text-3xl font-bold mb-10 text-center'>{typeCapitalized} films</h1>
            <Carousel settings={settings}>
                {results.map((item) => {
                    return (
                        <FilmItem key={item.id} film={item} to={`/films/id${item.id}`} state={{ film: item }} />
                    )

                })}
            </Carousel>
            <Link to={`/films/${type}/1`} state={{ type: type }} className='mx-auto block py-2 px-10 font-semibold bg-teal-600 rounded-lg text-white' style={{ width: 'fit-content' }}>see more</Link>

        </div>
    );
};

export default FilmCarousel;