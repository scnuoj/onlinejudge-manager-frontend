import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Route, HashRouter } from 'react-router-dom'
import Home from './components/Home'
import Problems from './components/Problems'
import { Provider } from 'mobx-react'
import * as stores from './stores'

import './index.css'

ReactDOM.render(
  <HashRouter>
    <Provider {...stores}>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/problems" component={Problems} />
      </App>
    </Provider>
  </HashRouter>,
  document.getElementById('root') as HTMLElement
)

registerServiceWorker()
