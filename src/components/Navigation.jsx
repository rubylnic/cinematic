import {
    NavLink
} from "react-router-dom";
import { useState, useEffect } from 'react';
import NavMenu from "./NavMenu";

function Navigation() {
    const [hidden, setHidden] = useState(false);
    useEffect(() => {
        if (window.screen.availWidth < 770) {
            setHidden(true)
        }
    }, [])

    return (

        <nav className="bg-gray-800 mb-10 flex gap-5 mx-auto px-4 sm:px-6 lg:px-8 rounded-t-lg py-3 flex justify-between items-center fixed w-full z-10">
            <NavLink
                to="/cinematic"
                className='bg-teal-900 text-white px-4 py-3 rounded-md text-xl font-medium hover:bg-teal-800'
                end
            >
                Cinematic
            </NavLink>
            {hidden ? '' : <NavMenu />}
            <button className={hidden ? "hamburger md:hidden" : "hamburger hamburger-close md:hidden"} onClick={() => { setHidden(!hidden) }}>
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
                <span className="bar bar3"></span>
                <span className="bar bar4"></span>
            </button>
            <div className="flex align-center items-center">
                <NavLink
                    to="cinematic/favs/"
                    className={({ isActive }) => (isActive ? 'bg-red-600 text-white px-3 py-2 rounded-md text-m font-medium' : 'bg-red-900 text-red-100 hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-m font-medium')}
                    end
                >
                    Your favs ♥
                </NavLink>
            </div>
        </nav>
    )
}
export default Navigation;
