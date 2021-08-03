const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = '4fcf984fd678ba775cf4619a7d49994c'

async function fetchWithErrorHandling(url = '') {
  try {
    const response = await fetch(url)
    const movies = await response.json()
    console.log(movies.results)
    return movies.results
  } catch (error) {
    console.log(error)
  }
}

export function fetchTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  )
}

export function fetchByKeyword() {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`,
  )
}

export function fetchDetails(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  )
}

export function fetchCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  )
}

export function fetchReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  )
}
