import React from 'react'

import AppRouter from 'app/config/router/AppRouter'

import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

const App = (): JSX.Element => {
  return (
    <div className="App">
      <AppRouter history={history} />
    </div>
  )
}

export default App
