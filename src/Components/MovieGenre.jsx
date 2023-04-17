export const MovieGenre = ({genre}) => {
  return (
    <span className="border dark:bg-slate-600 inline-block rounded px-2.5 py-1 bg-slate-50 dark:text-white text-slate-900">
      {genre.name}
    </span>
  )
}
