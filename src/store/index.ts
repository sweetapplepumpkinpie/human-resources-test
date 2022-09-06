import { applyMiddleware, Store, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas'
import { IUserState } from './users'

export interface IApplicationState {
  users: IUserState
}

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(
  initialState: IApplicationState
): Store<IApplicationState> {
  const middleware = applyMiddleware(sagaMiddleware)
  const store = createStore(reducers, initialState, middleware)

  sagaMiddleware.run(sagas)

  return store
}
