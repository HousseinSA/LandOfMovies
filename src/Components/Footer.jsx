import {Link} from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-white shadow w-full m-0 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
          <Link to={"/"} className="hover:underline m-2" rel={"noreferrer"}>
            MoviesLand
          </Link>
          All Rights Reserved.
        </span>
        <ul className="flex flex-wrap gap-2 items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link
              to="https://github.com/HousseinSA"
              target="_blank"
              className="mr-4 hover:underline md:mr-6 "
              rel="noreferrer">
              GitHub
            </Link>
          </li>
          <li>
            <Link
              to="https://linkden.com/in/housseinsa"
              target="_blank"
              rel="norefereer"
              className="mr-4 hover:underlin
              e md:mr-6">
              Linkden
            </Link>
          </li>
          <li>
            
            <Link
              to="https://instagram.com/houssein11"
              target="_blank"
              rel="norefereer"
              className="mr-4 hover:underline md:mr-6">
              instagram
            </Link>
          </li>
         
        </ul>
      </div>
    </footer>
  )
}
