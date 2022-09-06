import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import { RoutesComponent } from './routes'
import configureStore from './store'

const initialState = (window as any).initialReduxState
const store = configureStore(initialState)

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </Provider>
  )
}
export default App
