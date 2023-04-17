import {useParams, Link} from "react-router-dom"
import {useFetch, useTitle} from "../hooks/index"
import Backup from "../assets/backup image.jpg"
import notFound from "../assets/Pagenotfound.jpg"
import {MovieGenre} from "../Components"
export const MovieDetails = ({api}) => {
  const {id} = useParams()
  const {MovieData, error} = useFetch(`${api}${id}`)
  useTitle(MovieData.title)
  // creating i function to convertminutes to hours
  function converMinutesToHours(min) {
    const hours = Math.floor(min / 60)
    const minutes = min % 60
    return `${hours === 0 ? "" : hours + "hour"}${
      hours !== 1 && hours !== 0 ? "s" : ""
    } ${minutes} minute${minutes !== 1 ? "s" : ""}`
  }
  // make budget & boxoffice more readable
  function ReadableNumber(number) {
    if (!number) return
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(1) + " billion"
    }
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + " million"
    }
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + " thousand"
    }
    return number.toString()
  }

  const ImageUrl = MovieData.poster_path
    ? ` https://image.tmdb.org/t/p/w500/${MovieData.poster_path}`
    : Backup
  return (
    <main>
      <div className=" bg-white rounded-lg shadow  dark:bg-gray-800 p-3">
        <div className="flex justify-evenly flex-wrap my-4 gap-4">
          {error ? (
            <div className="block">
              <div className="font-bold dark:text-white py-5 text-2xl text-center text-black">
                <h3>Sorry,{error}</h3>
              </div>
              <div className="max-w-md">
                <Link to={"/"}>
                  <img className="rounded" src={notFound} alt="movie" />
                </Link>
              </div>
              <div className="title-change:my-5 my-3">
                <Link to={"/"}>
                  <button className=" px-4 py-2.5 text-black text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 dark:text-white rounded-lg">
                    Go Back
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="max-w-md">
                <Link to={"/"}>
                  <img className="rounded" src={ImageUrl} alt="movie" />
                </Link>
              </div>
              <div className="max-w-lg dark:text-white title-change:text-center mt-4 lg:mt-20">
                <h5 className="text-xl font-bold ">
                  {MovieData.name ? MovieData.name : MovieData.title}
                </h5>
                <p className="py-4">{MovieData.overview}</p>
                <div className="flex gap-2 mb-3 title-change:justify-center ">
                  {MovieData.genres &&
                    MovieData.genres.map((genre) => {
                      return <MovieGenre key={genre.id} genre={genre} />
                    })}
                </div>
                <div className="my-6">
                  <div className="my-2">
                    {MovieData.release_date && (
                      <p>
                        <span className="font-bold">Release date :</span>
                        {MovieData.release_date}
                      </p>
                    )}
                  </div>
                  <div className="my-2">
                    {MovieData.budget || MovieData.budget !== undefined ? (
                      <p>
                        <span className="font-bold">Budget: </span> $
                        {ReadableNumber(MovieData.budget)}
                      </p>
                    ) : null}
                  </div>
                  <div className="my-2">
                    {MovieData.revenue || MovieData.revenue !== undefined ? (
                      <p>
                        <span className="font-bold">Box Office :</span> $
                        {ReadableNumber(MovieData.revenue)}
                      </p>
                    ) : null}
                  </div>
                  <div className="my-2">
                    {MovieData.vote_average || MovieData.vote_average !== 0 ? (
                      <p>
                        <span className="font-bold">Rating : </span>{" "}
                        {MovieData.vote_average} / 10
                      </p>
                    ) : null}
                  </div>
                  <div className="my-2">
                    {MovieData.popularity && (
                      <p>
                        <span className="font-bold">Popularity :</span>{" "}
                        {MovieData.popularity}
                      </p>
                    )}
                  </div>
                  <div className="my-2">
                    {MovieData.first_air_date && (
                      <p>
                        <span className="font-bold">First Air Date :</span>{" "}
                        {MovieData.first_air_date}
                      </p>
                    )}
                  </div>
                  <div className="my-2">
                    {MovieData.number_of_seasons && (
                      <p>
                        {" "}
                        <span className="font-bold">Seasons :</span>{" "}
                        {MovieData.number_of_seasons}
                      </p>
                    )}
                  </div>
                  <div className="my-2">
                    {MovieData.status && (
                      <p>
                        {" "}
                        <span className="font-bold">Status :</span>{" "}
                        {MovieData.status}
                      </p>
                    )}
                  </div>
                  <div className="my-2">
                    {MovieData.runtime ? (
                      <p>
                        <span className="font-bold">Length: </span>
                        {converMinutesToHours(MovieData.runtime)}
                      </p>
                    ) : (
                      MovieData.episode_run_time && (
                        <p>
                          <span className="font-bold">Episode Length:</span>
                          {converMinutesToHours(MovieData.episode_run_time)}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
