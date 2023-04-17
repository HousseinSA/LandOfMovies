import notFoundPage from "../assets/Pagenotfound.jpg"
import {Link} from "react-router-dom"
import { useTitle } from "../hooks"
export const NotFound = () => {
  useTitle("Page Not Found")
  return (
    <main>
      <section className="max-w-7xl m-auto">
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-4xl text-slate-800 font-bold dark:text-white my-5">
            Opps Page not found!
          </p>
          <img
            src={notFoundPage}
            className="max-w-lg rounded "
            alt="page not found"
          />
        </div>
        <div className="ml-10  title-change:my-5 ">
          <Link to={"/"}>
            <button className=" px-4 py-2.5 text-black text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 dark:text-white rounded-lg">
              Go Back
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
