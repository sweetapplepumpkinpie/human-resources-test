export { userSagas } from './sagas'
export { usersReducer } from './reducer'

type TRole = 'student' | 'teacher' | 'parent'

export interface IUserState {
  readonly data: IUserRaw[]
  readonly loading: boolean
  readonly errors: []
}

export interface IUserRaw {
  id: number
  firstName: string
  lastName: string
  email: string
  photoUrl?: string
  role: TRole
  salutation?: string
}

export interface IUserFormData {
  firstName?: string
  lastName?: string
  email?: string
  photoUrl?: string
  role?: TRole
  salutation?: string
}

export type IUserFormDataKey = keyof IUserFormData

export const UserActionTypes = {
  ADD_USER: '@@User/ADD_USER',
  ADD_USER_SUCCESS: '@@User/ADD_USER_SUCCESS',
  ADD_USER_ERROR: '@@User/ADD_USER_ERROR',
}
