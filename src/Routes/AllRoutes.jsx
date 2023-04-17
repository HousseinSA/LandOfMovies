import {MovieDetails, MovieList, Search, NotFound, TvShow} from "../Pages"
import {Routes, Route} from "react-router-dom"
export const AllRoutes = ({location}) => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route
          path="/"
          element={<MovieList api={"movie/popular"} title={"Home"} />}
        />
        <Route path="/movie/:id" element={<MovieDetails api="movie/" />} />
        <Route path="/serie/:id" element={<MovieDetails api="tv/" />} />
        <Route
          path="/movies/top-rated"
          element={<MovieList api={"movie/top_rated"} title={"Top Rated"} />}
        />
        <Route
          path="/shows/popular"
          element={<TvShow api={"tv/popular"} title={"Tv Shows"} />}
        />
        <Route
          path="/shows/top-rated"
          element={<TvShow api={"tv/top_rated"} title={"Tv Shows"} />}
        />
        <Route
          path="/movies/popular"
          element={<MovieList api={"movie/popular"} title={"Popular"} />}
        />
        <Route
          path="/search"
          element={
            <Search
              api={`search/movie`}
              location={location}
            />
          }
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList api={"movie/upcoming"} title={"Upcoming"} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
