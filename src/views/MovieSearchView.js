import { useState, useEffect } from 'react'
import * as moviesApi from '../services/movies-api'
import { Link, useHistory } from 'react-router-dom'

export default function MovieSearchView() {
  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const history = useHistory()

  const handleSearch = (e) => {
    const input = e.target.elements[0].value
    e.preventDefault()
    setQuery(e.target.elements[0].value)
    localStorage.setItem('query', JSON.stringify(input))
    history.push(`${window.location.pathname}?query=${input}`)
  }

  const storageQuery = JSON.parse(localStorage.getItem('query'))

  useEffect(() => {
    if (!storageQuery && query === '') {
      return
    } else if (!query) {
      moviesApi
        .fetchByKeyword(storageQuery)
        .then((result) => {
          setMovies(result)
        })
        .catch((error) => console.log(error))
    } else {
      moviesApi
        .fetchByKeyword(query)
        .then((result) => {
          setMovies(result)
        })
        .catch((error) => console.log(error))
    }
  }, [query, storageQuery])

  return (
    <>
      <form onSubmit={handleSearch}>
        <label>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {movies && (
        <ul>
          {movies.map(
            (movie) =>
              movie.title && (
                <li key={movie.id}>
                  <Link
                    to={{
                      pathname: `movies/${movie.id}`,
                      state: {
                        params: `${window.location.pathname}?query=${query}`,
                      },
                    }}
                  >
                    {movie.title}
                  </Link>
                </li>
              ),
          )}
        </ul>
      )}
    </>
  )
}
