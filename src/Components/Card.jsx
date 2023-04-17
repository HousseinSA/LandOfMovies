import {Link} from "react-router-dom"
import Backup from "../assets/backup image.jpg"
export const Card = ({movie, path, location}) => {
  const {id, title, name, overview, poster_path: image} = movie
  const ImageUrl = image ? ` https://image.tmdb.org/t/p/w500/${image}` : Backup
  const searchPath = () => {
    if (location === "/shows/upcoming" || location === "/shows/popular") {
      return "/serie/"
    } else {
      if (path === "/serie/") {
        return "/serie/"
      }
      return "/movie/"
    }
  }
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-3">
      <Link to={`${searchPath()}${id}`}>
        <img
          className="rounded-t-lg"
          src={ImageUrl}
          alt={title ? title : name}
        />
      </Link>
      <div className="p-5">
        <Link to={`${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title ? title : name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  )
}
