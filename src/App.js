import { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import AppBar from './components/AppBar/AppBar'
import Container from './components/Container/Container'

// import AuthorsView from './views/AuthorsView';
// import BooksView from './views/BooksView';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
)
const MovieView = lazy(() =>
  import('./views/MovieView.js' /* webpackChunkName: "movie-view" */),
)
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.js' /* webpackChunkName: "not-found-view" */),
)
// const AuthorsView = lazy(() =>
//   import('./views/AuthorsView.js' /* webpackChunkName: "authors-view" */),
// )
// const BooksView = lazy(() => import('./views/BooksView.js'))
// const BookDetailsView = lazy(() => import('./views/BookDetailsView.js'))

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h1>ЗАГРУЖАЕМ МАРШРУТ...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies/:movieId">
            <MovieView />
          </Route>

          {/* <Route path="/authors">
            <AuthorsView />
          </Route>

          <Route path="/books" exact>
            <BooksView />
          </Route> */}

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  )
}
