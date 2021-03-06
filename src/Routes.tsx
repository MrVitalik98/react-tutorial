import { lazy, Suspense, FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import Loader from './components/Loader'
const Home = lazy(() => import('./pages/Home'))
const Photos = lazy(() => import('./pages/Photos'))


const Routes:FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/:id/photos">
          <Photos />
        </Route>
      </Switch>
    </Suspense>
  )
}


export default Routes