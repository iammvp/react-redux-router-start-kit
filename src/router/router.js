import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

//import redux
import { Provider } from 'react-redux'
import store,{ history } from '../redux/store'

//imports components
import App from '../components/App'
import Rock from '../components/Rock'

//deploy your router
const router = (
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Rock}/>
        </Route>
    </Router>
  </Provider>
);
export default router;
