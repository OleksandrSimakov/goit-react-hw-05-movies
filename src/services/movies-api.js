const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = '4fcf984fd678ba775cf4619a7d49994c'

async function fetchWithErrorHandling(url = '') {
  try {
    const response = await fetch(url)
    const movies = await response.json()
    return movies.results
  } catch (error) {
    console.log(error)
  }
}

export function fetchTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
  )
}

export function fetchByKeyword(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  )
}

export async function fetchDetails(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    )
    const movie = await response.json()
    return movie
  } catch (error) {
    console.log(error)
  }
}

export async function fetchCast(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    )
    const movie = await response.json()
    return movie
  } catch (error) {
    console.log(error)
  }
}

export async function fetchReviews(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
    const movie = await response.json()
    return movie
  } catch (error) {
    console.log(error)
  }
}
