import { useLocation, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useState, useEffect } from "react"
import axios from "axios";
import RatingBadge from "../components/RatingBadge";
import FilmCarousel from "../components/FilmCarousel";
import FavButton from "../components/FavButton";

function FilmPage(props) {
    const location = useLocation();
    const params = useParams();
    const { id } = params;
    const [film, setFilm] = useState('')
    const [loaded, setLoaded] = useState(false);
    const apiLink = `${process.env.REACT_APP_MOVIEDB_URL}movie/${id}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US`;
    useEffect(() => {
        setLoaded(false);

        axios.get(apiLink).then((res) => {
            setFilm(res.data);
            setLoaded(true);
            window.scrollTo(0, 0);
        }).catch((err) => {
            console.error(err)
        })
    }, [location])
    const img = film.poster_path;
    const {
        budget,
        genres,
        homepage,
        imdb_id,
        original_language,
        overview,
        poster_path,
        production_companies,
        release_date,
        tagline,
        title,
        original_title,
        vote_average,
        production_countries
    } = film;


    {
        if (loaded) {
            return (
                <>
                    <div className="flex justify-center max-w-screen-lg mx-auto gap-10 mb-20">
                        <div className="grow">
                            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                        </div>
                        <div className="relative max-w-screen-sm">
                            <div>
                                <h1 className="px-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-1">{title} ({release_date?.slice(0, 4)})</h1>
                                <h2 className="px-5 text-gray-500 mb-2">{original_title}</h2>
                                <RatingBadge rating={vote_average} />
                            </div>
                            <div>
                                <div className="film-info overflow-hidden bg-white shadow sm:rounded-lg">
                                    <FavButton film={film} text />
                                    <div className="border-t border-gray-200">
                                        <dl>
                                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Year</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{release_date?.slice(0, 4)}</dd>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Country</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{production_countries ? production_countries.map((item, index) => <div key={index}>{item.name}</div>) : ''}</dd>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Production companies</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{production_companies ? production_companies.map((item, index) => <div key={index}>{item.name}</div>) : ''}</dd>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Original language</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{original_language?.toUpperCase()}</dd>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Genres</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{genres ? genres.map((item, index) => <div key={index}>{item.name}</div>) : ''}</dd>
                                            </div>
                                            {tagline ? <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Tagline</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{tagline}</dd>
                                            </div>
                                                :
                                                ''}
                                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Overview</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{overview}</dd>
                                            </div>
                                            {budget > 0 ? <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Budget</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{budget}$</dd>
                                            </div>
                                                : ''}

                                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Links</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                    <div className="ml-4 flex-shrink-0">
                                                        <a href={'https://www.imdb.com/title/' + imdb_id} className="font-medium text-indigo-600 hover:text-indigo-500">IMD page</a>
                                                    </div>
                                                    {homepage ?
                                                        <div className="ml-4 flex-shrink-0">
                                                            <a href={homepage} className="font-medium text-indigo-600 hover:text-indigo-500">Film page</a>
                                                        </div> :
                                                        ''}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div >
                    <FilmCarousel similar type="Similar" id={id} />
                </>)
        } else {
            return <div className="flex justify-center items-center w-full h-full"><Loader /></div>
        }
    }

}

export default FilmPage;