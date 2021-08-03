import { Suspense, useEffect, lazy } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'

const MovieSubView = lazy(() =>
  import('./MovieSubView.js' /* webpackChunkName: "movies-subview"*/),
)

export default function MoviesSubView({ cast, reviews }) {
  // const movie = movies.find((movie) => movie.id === Number(movieId))

  const { path } = useRouteMatch()

  const [cast, setCast] = useState(null)
  const [reviews, setReviews] = useState(null)

  useEffect(() => {
    moviesApi.fetchCast(movieId).then(setCast)
  }, [])

  useEffect(() => {
    moviesApi.fetchReviews(movieId).then(setReviews)
  }, [])

  return (
    <>
      <Suspense fallback={<h1>Загружаем подмаршрут...</h1>}>
        {/* <Route path={`${path}/:movieId`}> */}
        <Route>
          <MovieSubView cast={cast} review={reviews} />
        </Route>
      </Suspense>
      {/* <ul>
        {author.books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul> */}
    </>
  )
}
