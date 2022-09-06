import { all, fork, put, takeEvery } from 'redux-saga/effects'

import { addUsersSuccess } from './actions'
import { UserActionTypes } from './'

function* handleAdd(action: any): Generator {
  try {
    yield put(addUsersSuccess(action.payload))
  } catch (err) {}
}

function* watchAddRequest(): Generator {
  yield takeEvery(UserActionTypes.ADD_USER, handleAdd)
}

export function* userSagas() {
  yield all([fork(watchAddRequest)])
}
