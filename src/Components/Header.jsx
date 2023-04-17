import {useEffect, useState} from "react"
import {Link, NavLink, useNavigate, useLocation} from "react-router-dom"
import {FaMoon, FaSun} from "react-icons/fa"
export const Header = ({changing, changingValue, location}) => {
  // state to hide the nav bar of show it
  const [hidden, setHidden] = useState(true)
  const [darkMode, setDarkMode] = useState(
    // theme changing
    JSON.parse(localStorage.getItem("theme")) || false
  )
  // react-router hooks to change path and know it
  const navigate = useNavigate()
  const {pathname} = useLocation()
  // useEffect ot store theme in localstorage and change add class or remove it in html page and changing body background according to the theme.
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add("dark")
      document.body.style = "background: rgb(30 41 59)"
    } else {
      document.documentElement.classList.remove("dark")
      document.body.style = "background: white"
    }
  }, [darkMode])
  // useEffect to
  useEffect(() => {
    if (changingValue) {
      navigate(pathname)
    }
    // eslint-disable-next-line
  }, [pathname, changingValue])
  //  handeling the state of the bropdown menu of tv shows
  const [showMenu, setShowMenu] = useState(false)
  function handelTVMenu() {
    setShowMenu(!showMenu)
  }
  function handelSubmit(e) {
    e.preventDefault()
    changing("")
  }
  useEffect(() => {
    if (changingValue === "") return
    navigate(`/search?q=${changingValue}`)
     // eslint-disable-next-line
  }, [changingValue])
  useEffect(() => {
    if (pathname === "/shows/popular" || pathname === "/shows/top-rated") {
      location(pathname)
    } else if (
      pathname === "/movies/top-rated" ||
      pathname === "/movies/popular" ||
      pathname === "/movies/upcoming" ||
      pathname === "/"
    ) {
      location(pathname)
    }
    changing("")
  }, [pathname, location, changing])
  const acitve =
    "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
  const inActive =
    "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  return (
    <header>
      <nav className="header bg-white border-gray-200  dark:bg-gray-900">
        <div className="max-w-screen-xl x-sm:flex-wrap x-sm:gap-2 flex-wrap  flex items-center justify-between mx-auto p-4 x-sm:justify-center gap-1">
          <Link className="flex items-center" to={"/"}>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Moviesland
            </span>
          </Link>
          <div id="mobile-nav" className="flex md:order-2 gap-2">
            <button
              className="bg-gray-200 rounded-full p-3"
              id="theme-toggler"
              onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <FaMoon color="blue" size={14} />
              ) : (
                <FaSun color="orange" size={14} />
              )}
            </button>
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              onClick={() => setHidden(!hidden)}
              className={`md:hidden H-sizing:${
                hidden ? "block" : "hidden"
              } text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1`}>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div
              className={`relative hidden H-sizing:${
                hidden ? "hidden" : "block"
              } md:block`}>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <form onSubmit={handelSubmit}>
                <input
                  type="text"
                  id="search-navbar"
                  name="search"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search... "
                  autoComplete="off"
                  value={changingValue}
                  onChange={(e) => changing(e.target.value)}
                />
              </form>
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false">
              <span className="sr-only">Open Menu</span>
              <svg
                className="w-6 h-6"
                onClick={() => setHidden(!hidden)}
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              hidden ? "hidden" : ""
            } items-center justify-between  w-full md:flex md:w-auto md:order-1`}
            id="navbar-search">
            <div id="nav-links" className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
              <form onSubmit={handelSubmit}>
                <input
                  type="text"
                  id="s-navbar"
                  name="search"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  onChange={(e) => changing(e.target.value)}
                />
              </form>
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to={"/"}
                  className={({isActive}) => (isActive ? acitve : inActive)}
                  end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"movies/popular"}
                  className={({isActive}) => (isActive ? acitve : inActive)}>
                  popular
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"movies/top-rated"}
                  className={({isActive}) => (isActive ? acitve : inActive)}>
                  Top Rated
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"movies/upcoming"}
                  className={({isActive}) => (isActive ? acitve : inActive)}>
                  Up Coming
                </NavLink>
              </li>
              <li>
                <div className="md:relative">
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    onClick={handelTVMenu}
                    className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                    TV Shows
                    <svg
                      className="w-5 h-5 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"></path>
                    </svg>
                  </button>
                  <div
                    id="dropdownNavbar"
                    className={`z-10 absolute ${
                      showMenu ? "" : "hidden"
                    } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-400"
                      aria-labelledby="dropdownLargeButton">
                      <li>
                        <Link
                          to={"/shows/popular"}
                          onClick={handelTVMenu}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Popular
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/shows/top-rated"}
                          onClick={handelTVMenu}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          top-rated
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
