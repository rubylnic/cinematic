import FilmCarousel from '../components/FilmCarousel'
import Search from '../components/Search'

export default function HomePage() {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center text-teal-600 mb-5'>Cinematic</h1>
            <Search />
            <FilmCarousel type='popular' />
        </div>
    )
}
