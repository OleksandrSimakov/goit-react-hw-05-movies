import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as moviesApi from '../services/movies-api'
import PageHeading from '../components/PageHeading/PageHeading'

export default function HomeView() {
  // const { url } = useRouteMatch()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    moviesApi.fetchTrending().then(setMovies)
  }, [])

  return (
    <>
      <PageHeading text="Trending today" />

      {movies && (
        <ul>
          {movies.map(
            (movie) =>
              movie.title && (
                <li key={movie.id}>
                  {/* <Link to={`${url}/${movie.id}`}>{movie.title}</Link> */}
                  <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                </li>
              ),
          )}
        </ul>
      )}
    </>
  )
}
