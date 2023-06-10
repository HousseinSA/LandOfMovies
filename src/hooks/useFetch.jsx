import {useState, useEffect, useCallback} from "react"
export const useFetch = (api, querySearch = "", location) => {
  const [MovieData, setMovieData] = useState([])
  const [error, setError] = useState()
  const apiKey = process.env.REACT_APP_APIKEY
  const apiUrl = useCallback(() => {
    if (location === "/shows/top-rated" || location === "/shows/popular") {
      return `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${querySearch}`
    } else {
      return `https://api.themoviedb.org/3/${api}?api_key=${apiKey}&query=${querySearch}`
    }
  }, [api, location, querySearch, apiKey])
  useEffect(() => {
    async function fetchMovies() {
      setTimeout(async () => {
        try {
          const response = await fetch(apiUrl())
          if (!response.ok) {
            throw new Error()
          }
          const data = await response.json()
          if (Array.isArray(data.results)) {
            setMovieData(data.results)
          } else if (typeof data === "object") {
            setMovieData(data)
          }
        } catch (error) {
          setError(error.message)
        }
      }, 1000)
    }
    fetchMovies()
  }, [api, querySearch, apiUrl])
  return {MovieData, error}
}
