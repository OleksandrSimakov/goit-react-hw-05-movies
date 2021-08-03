import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import * as moviesApi from '../services/movies-api'
import css from '../views/MovieView.module.css'

export default function MovieDetailsPage() {
  const { movieId } = useParams()

  const [movie, setMovie] = useState(null)

  useEffect(() => {
    moviesApi.fetchDetails(movieId).then(setMovie)
  }, [movieId])

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
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
    </>
  )
}
