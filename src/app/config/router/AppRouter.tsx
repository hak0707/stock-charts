import React from 'react'

import { Router, Route } from 'react-router-dom'
import { History } from 'history'

import { ROUTE_PATH } from 'app/constants/router'

import EntranceContainer from 'app/containers/EntranceContainer'

interface CustomRouterProps {
  history: History
}

const AppRouter = ({ history }: CustomRouterProps): JSX.Element => {
  return (
    <Router history={history}>
      <Route path={ROUTE_PATH.TOP_PAGE} component={EntranceContainer} />
    </Router>
  )
}

export default AppRouter
