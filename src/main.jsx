import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import './index.css'
import Pages from './components/pages.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Pages/>
  </Provider>
)
