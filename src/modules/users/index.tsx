import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserCreateForm } from '../../components/userCreateForm'

const UserContainer: React.FC = () => {
  return <UserCreateForm></UserCreateForm>
}

export { UserContainer }
