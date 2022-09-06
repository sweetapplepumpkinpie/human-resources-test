import React, { BaseSyntheticEvent, SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { IUserFormData } from '../store/users'
import { addUser } from '../store/users/actions'

const roles = [
  { role: 'student', label: 'Student' },
  { role: 'teacher', label: 'Teacher' },
  { role: 'parent', label: 'Parent' },
]

const UserCreateForm: React.FC = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState<IUserFormData>({
    firstName: '',
    lastName: '',
    email: '',
    salutation: '',
    role: 'student',
    photoUrl: '',
  })
  const [errors, setErrors] = useState<IUserFormData>({
    firstName: '',
    lastName: '',
    email: '',
    salutation: '',
    role: 'student',
    photoUrl: '',
  })

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    if (isValidate()) {
      dispatch(addUser(user))
    }
  }
  const subValidate = (field: string, value: string): string => {
    switch (field) {
      case 'photoUrl':
        if (!/\.(jpe?g)$/i.test(value)) {
          return 'This is not a jpg file.'
        }
        break
      case 'email':
        if (
          !String(value)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
          return 'This is not a valid email.'
        }
        if (!value) {
          return `This field is required.`
        }
        break
      default:
        if (!value) {
          return `This field is required.`
        }
    }
    return ''
  }

  const isValidate = (): boolean => {
    for (let field in user) {
      const fieldValue = user[field as keyof IUserFormData] || ''
      const isInvalid = subValidate(field, fieldValue)
      if (isInvalid) {
        setErrors({
          ...errors,
          [field]: isInvalid,
        })
        return false
      }
    }
    return true
  }

  const handleChange = (event: BaseSyntheticEvent) => {
    const {
      target: { name, value },
    } = event

    setUser({
      ...user,
      [name]: value ?? '',
    })
    setErrors({
      ...errors,
      [name]: subValidate(name, value),
    })
  }

  const { firstName, lastName, email, salutation, role, photoUrl } = user
  return (
    <div>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={firstName}
                      onChange={handleChange}
                      autoComplete="given-name"
                      className={`border py-2 px-3 text-grey-darkest w-full ${
                        errors?.firstName && 'border-rose-600'
                      }`}
                    />
                    <span className={errors?.firstName && 'text-red-600'}>
                      {errors?.firstName}
                    </span>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      value={lastName}
                      onChange={handleChange}
                      autoComplete="family-name"
                      className={`border py-2 px-3 text-grey-darkest w-full ${
                        errors?.lastName && 'border-rose-600'
                      }`}
                    />
                    <span className={errors?.lastName && 'text-red-600'}>
                      {errors?.lastName}
                    </span>
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handleChange}
                      autoComplete="email"
                      className={`border py-2 px-3 text-grey-darkest w-full ${
                        errors?.email && 'border-rose-600'
                      }`}
                    />
                    <span className={errors?.email && 'text-red-600'}>
                      {errors?.email}
                    </span>
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="salutation"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Salutation
                    </label>
                    <input
                      type="text"
                      name="salutation"
                      id="salutation"
                      value={salutation}
                      onChange={handleChange}
                      autoComplete="salutation"
                      className="border py-2 px-3 text-grey-darkest w-full"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      onChange={handleChange}
                      autoComplete="role"
                      name="role"
                      value={role}
                      className={`border py-2 px-3 text-grey-darkest w-full ${
                        errors?.role && 'border-rose-600'
                      }`}
                    >
                      {roles.map((current) => {
                        return (
                          <option key={current.role} value={current.role}>
                            {current.label}
                          </option>
                        )
                      })}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="photo"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>z
                            <input
                              id="photo"
                              name="photoUrl"
                              type="file"
                              value={photoUrl}
                              onChange={handleChange}
                              className="sr-only"
                            />
                          </label>
                        </div>
                        <div className={errors?.photoUrl && 'text-red-600'}>
                          {errors?.photoUrl}
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export { UserCreateForm }
