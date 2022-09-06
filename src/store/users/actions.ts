import { action } from 'typesafe-actions'
import { IUserFormData, IUserRaw, UserActionTypes } from './'

export const addUser = (user: IUserFormData) =>
  action(UserActionTypes.ADD_USER, user)

export const addUsersSuccess = (data: IUserRaw[]) =>
  action(UserActionTypes.ADD_USER_SUCCESS, data)
