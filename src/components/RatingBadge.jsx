export default function RatingBadge(props) {
    const rating = props.rating?.toString().slice(0, 3);
    if (rating >= 7) {
        return <div className={`rating bg-orange-300 rounded-lg w-10 h-10 flex justify-center items-center text-white absolute top-0 right-0`}>{rating}</div>
    } else if (rating < 5) {
        return <div className={`rating bg-red-400 rounded-lg w-10 h-10 flex justify-center items-center text-white absolute top-0 right-0`}>{rating}</div>
    } else {
        return <div className={`rating bg-teal-600 rounded-lg w-10 h-10 flex justify-center items-center text-white absolute top-0 right-0`}>{rating}</div>
    }

}
