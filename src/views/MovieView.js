import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import {
  useParams,
  Route,
  NavLink,
  useLocation,
  useHistory,
} from 'react-router-dom'
import { useRouteMatch } from 'react-router'
import * as moviesApi from '../services/movies-api'
import css from '../views/MovieView.module.css'

const MovieReviewView = lazy(() =>
  import('./MovieReviewView' /* webpackChunkName: "movie-review-view" */),
)
const MovieCastView = lazy(() =>
  import('./MovieCastView' /* webpackChunkName: "movie-cast-view" */),
)

export default function MovieDetailsPage() {
  const { movieId } = useParams()
  const { url, path } = useRouteMatch()
  const location = useLocation()
  const history = useHistory()
  const routerState = useRef(null)

  useEffect(() => {
    if (!routerState.current) {
      routerState.current = location.state
    }
  }, [location.state])

  const [movie, setMovie] = useState(null)
  const [casts, setCasts] = useState(null)
  const [reviews, setReviews] = useState(null)

  useEffect(() => {
    moviesApi.fetchDetails(movieId).then(setMovie)
    moviesApi.fetchCast(movieId).then(setCasts)
    moviesApi.fetchReviews(movieId).then(setReviews)
  }, [movieId])

  const onGoBack = () => {
    const url = routerState.current ? `${routerState.current.params}` : '/'
    history.push(url)
  }

  return (
    <>
      <button type="button" onClick={onGoBack}>
        ← Go back
      </button>
      {movie && (
        <div className={css.card}>
          <div className={css.image}>
            <img
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>

          <div className={css.description}>
            <h2>{`${movie.title} (${movie.release_date.substr(0, 4)})`}</h2>
            <p>User score: {Number(movie.vote_average * 10)} %</p>

            <h3>Overview</h3>
            <p>{movie.overview}</p>

            <h4>Genres</h4>
            <ul className={css.genres}>
              {movie.genres.map((genre) => (
                <li className={css.list} key={genre.name}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <hr />
      <div>
        <p>Additional information</p>
        <ul className={css.reviewList}>
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <hr />
      <Suspense fallback={<h1>ЗАГРУЖАЕМ МАРШРУТ...</h1>}>
        <Route path={`${path}/cast`}>
          {casts && <MovieCastView casts={casts} />}
        </Route>

        <Route path={`${path}/reviews`}>
          {reviews && <MovieReviewView reviews={reviews} />}
        </Route>
      </Suspense>
    </>
  )
}
