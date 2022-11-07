import { useState, useEffect } from 'react'
import { useAddNewUserMutation } from './usersApiSlice'
import { useNavigate } from 'react-router-dom'
import { ROLES } from '../../config/roles'

const NewUserForm = () => {
  const [addNewUser, { isLoading, isSuccess, isError, error }] =
    useAddNewUserMutation()

  const navigate = useNavigate()

  return <div>NewUserForm</div>
}

export default NewUserForm
