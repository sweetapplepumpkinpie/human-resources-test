import { action } from 'typesafe-actions'
import { UserActionTypes } from '..'
import { addUser } from '../actions'

describe('users', () => {
  describe('actions', () => {
    describe('addUser()', () => {
      it('should create an action', () => {
        const user = {
          id: 1,
          firstName: 'a',
          lastName: 'b',
          email: 'this@gmail.com',
        }
        const expectation = action(UserActionTypes.ADD_USER, user)

        expect(addUser(user)).toEqual(expectation)
      })
    })
  })
})
