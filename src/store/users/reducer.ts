import { Action, PayloadAction, TypeConstant } from 'typesafe-actions'

import { IUserRaw, IUserState, UserActionTypes } from './'

export const initialState: IUserState = {
  data: [],
  errors: [],
  loading: false,
}

export const usersReducer = (
  state: IUserState = initialState,
  action: Action<TypeConstant> & PayloadAction<TypeConstant, IUserRaw | null>
): IUserState => {
  switch (action.type) {
    case UserActionTypes.ADD_USER: {
      return { ...state, loading: true }
    }
    case UserActionTypes.ADD_USER_SUCCESS: {
      if (action.payload) {
        const { firstName, lastName, email, salutation, photoUrl, role } =
          action.payload
        const user: IUserRaw = {
          id: state.data.length,
          firstName,
          lastName,
          email,
          salutation,
          photoUrl,
          role,
        }
        return { ...state, data: [user] }
      }
      return { ...state }
    }
    case UserActionTypes.ADD_USER_ERROR: {
      return {
        ...state,
      }
    }
    default:
      return state
  }
}
