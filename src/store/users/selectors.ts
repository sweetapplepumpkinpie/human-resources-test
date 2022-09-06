import { IApplicationState } from '../index'

export function getUsers(state: IApplicationState) {
  return state.users
}
