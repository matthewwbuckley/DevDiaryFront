import { Switch, Route } from 'react-router-dom';

import sitemap from './sitemap.js'

export default function Router() {
  return(
    <Switch>
      <Route exact path={sitemap.homepage} render={props=><LandingPage {...props} />} />
    </Switch>
  )
}