import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FilmItem from './FilmItem';
import Carousel from './Carousel';

const FilmCarousel = (props) => {
    const [response, setResponse] = useState([]);
    const [slidesToShow, setSlidesToShow] = useState(4)
    const type = props.type;

    useEffect(() => {
        axios.get(apiLink).then((res) => {
            setResponse(res.data)
        }).catch((err) => {
            console.error(err)
        })

        if (window.screen.availWidth < 500) {
            setSlidesToShow(1)
        } else if (window.screen.availWidth < 770) {
            setSlidesToShow(2)
        } else if (window.screen.availWidth < 1024) {
            setSlidesToShow(3)
        }
    }, [])

    let { results = [] } = response;

    // в зависимости от типа - разные url
    let apiLink;
    if (props.id) {
        apiLink = `${process.env.REACT_APP_MOVIEDB_URL}/movie/${props.id}/similar?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US&page=1`;
    } else {
        apiLink = `${process.env.REACT_APP_MOVIEDB_URL}/movie/${type}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US&page=1`;
    }
    const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1).replace('_', ' ');

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
                        <FilmItem key={item.id} film={item} to={`/cinematic/films/id${item.id}`} state={{ film: item }} />
                    )

                })}
            </Carousel>
            {type !== "Similar" ? <Link to={`/cinematic/films/${type}/1`} state={{ type: type }} className='mx-auto block py-2 px-10 font-semibold bg-teal-600 rounded-lg text-white' style={{ width: 'fit-content' }}>see more</Link> : ""}

        </div>
    );
};

export default FilmCarousel;