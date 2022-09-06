import { addUser } from '../actions'
import { initialState, usersReducer } from '../reducer'
import * as userData from './__mockData__/usersData.json'

describe('post reducer', () => {
  it('should return initial state', () => {
    expect(
      usersReducer(initialState, { type: 'no type', payload: null })
    ).toEqual(initialState)
  })
})
