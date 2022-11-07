import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addToFavs, removeFromFavs } from '../redux/actions';

export default function FavButton({ film, text }) {
    const dispatch = useDispatch();
    const [inFavs, setInFavs] = useState(false);
    const [buttonColor, setButtonColor] = useState("#ffffff");
    const [buttonText, setButtonText] = useState('add to favs');

    useEffect(() => {
        if (film.inFavs) {
            setInFavs(true);
            setButtonColor("#cf0000");
            setButtonText("remove from favs");
        } else {
            setInFavs(false);
            setButtonColor("#ffffff");
            setButtonText("add to favs");
        }
    }, [inFavs])

    function handleClick(evt) {
        evt.preventDefault();
        if (inFavs) {
            dispatch(removeFromFavs(film))
            setInFavs(false);
        } else {
            dispatch(addToFavs(film))
            setInFavs(true);
        }
    }
    return (
        <button className={inFavs ? 'fav-button bg-white rounded-lg p-5 z-10 text-white font-semibold border border-gray-300' : 'fav-button bg-teal-800 rounded-lg p-5 z-10 text-white font-semibold border'} onClick={handleClick}>
            {text ? <span style={{ color: buttonColor }}>{buttonText}</span> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={buttonColor}><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" /></svg>}
        </button>
    )
}
