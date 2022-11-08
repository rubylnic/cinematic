
import { useNavigate } from 'react-router-dom'

export default function Pagination({ page, totalPages, type, genreId }) {
    const navigate = useNavigate();
    let state;

    const onNextPageClick = (evt) => {
        if (page + 1 > totalPages) {
            evt.preventDefault()
        } else {
            navigate(`/cinematic/films/${type}/${page + 1}`, { state: state })
        }

    }
    const onPrevPageClick = (evt) => {
        if (page - 1 <= 0) {
            evt.preventDefault()
        } else {
            navigate(`/cinematic/films/${type}/${page - 1}`, { state: state })
        }
    }

    if (genreId) {
        state = {
            genre: type,
            genreId: genreId
        }
    } else {
        state = {
            type: type,
        }
    }

    return (
        <div className='flex justify-center w-full mb-10 gap-5'>
            {page > 1 ? <button onClick={onPrevPageClick} className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700'>{'<'}</button> : ''}
            {page < totalPages ? <button onClick={onNextPageClick} className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700'>{'>'}</button> : ''}
        </div>
    )
}
