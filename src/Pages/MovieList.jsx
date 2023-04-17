import {Card} from "../Components"
import {useFetch, useTitle} from "../hooks"
export const MovieList = ({api, title}) => {
  const {MovieData: moviesList} = useFetch(api)
  useTitle(title)
  return (
    <main>
      <section className="max-w-7xl m-auto ">
        <div className="  flex gap-3 justify-center flex-wrap">
          {moviesList &&
            moviesList.map((movie) => {
              return <Card key={movie.id} movie={movie} path={"/movie/"} />
            })}
        </div>
      </section>
    </main>
  )
}
