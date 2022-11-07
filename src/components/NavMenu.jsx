
import {
    NavLink
} from "react-router-dom";


export default function NavMenu() {
    return (
        <div className="nav-menu flex align-center items-center flex-col flex md:flex-row">

            <NavLink
                to="/genres"
                className={({ isActive }) => (isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 BG-GRAYhover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium')}
            >
                Genres
            </NavLink>
            <NavLink
                to={`/films/popular/1`}
                className={({ isActive }) => (isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium')}
                state={{ type: 'popular' }}
            >
                Popular films
            </NavLink>
            <NavLink
                to={`/films/top_rated/1`}
                className={({ isActive }) => (isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium')}
                state={{ type: 'top_rated' }}
            >
                Top rated films
            </NavLink>
            <NavLink
                to={`/films/upcoming/1`}
                className={({ isActive }) => (isActive ? 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium')}
                state={{ type: 'upcoming' }}
            >
                Upcoming films
            </NavLink>
        </div>
    )
}
