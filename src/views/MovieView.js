import { useState, useEffect } from 'react'
import { useParams, Route, NavLink } from 'react-router-dom'
import { useRouteMatch } from 'react-router'
import * as moviesApi from '../services/movies-api'
import css from '../views/MovieView.module.css'
import MovieCastView from './MovieCastView'
import MovieReviewView from './MovieReviewView'

export default function MovieDetailsPage() {
  const styles = {
    list: {
      marginLeft: '20px',
    },
  }
  const { movieId } = useParams()
  const { url } = useRouteMatch()

  const [movie, setMovie] = useState(null)
  const [casts, setCasts] = useState(null)
  const [reviews, setReviews] = useState(null)

  useEffect(() => {
    moviesApi.fetchDetails(movieId).then(setMovie)
    moviesApi.fetchCast(movieId).then(setCasts)
    moviesApi.fetchReviews(movieId).then(setReviews)
  }, [movieId])
  // console.log(movie)
  // console.log(casts)
  console.log(reviews)

  return (
    <>
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
        <ul style={styles.list}>
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
      <hr />

      <Route path="/movies/:movieId/cast">
        {casts && <MovieCastView casts={casts} />}
      </Route>
      <Route path="/movies/:movieId/reviews">
        {reviews && <MovieReviewView reviews={reviews} />}
      </Route>
    </>
  )
}
