import { useState, useEffect } from 'react'
import { useAddNewUserMutation } from './usersApiSlice'
import { useNavigate } from 'react-router-dom'
import { ROLES } from '../../config/roles'
import PersonalInfo from './PersonalInfo'

const NewUserForm = () => {
  const navigate = useNavigate()

  const [addNewUser, { isLoading, isSuccess, isError, error }] =
    useAddNewUserMutation()

  const [formData, setFormData] = useState({
    // informacion personal
    idType: '',
    idNumber: '',
    name: '',
    lastname: '',
    // informacion general
    birthDate: '',
    gender: '',
    bloodType: '',
    rh: '',
    maritalStatus: '',
    eps: '',
    // datos de localizacion
    personalPhone: '',
    personalPhone2: '',
    address: '',
    city: '',
    department: '',
    // informacion de la sesion
    roles: '',
    active: '',
    email: '',
    password: '',
    password2: '',
    // informacion de contacto
    contactName: '',
    contactLastname: '',
    contactRelationship: '',
    contactPhone: '',
  })

  const handleChange = (e) => {
    const type = e.target.type
    const name = e.target.name
    const value = e.target.value

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(JSON.stringify(formData))
  }

  // destructuramos para separar los campos requeridos
  const {
    maritalStatus,
    personalPhone2,
    address,
    city,
    department,
    roles,
    active,
    contactName,
    contactLastname,
    contactPhone,
    contactRelationship,
    ...requiredFields
  } = formData

  // comprobamos que los campos requeridos tengan un valor
  const canSave = [...Object.values(requiredFields)].every(Boolean)

  const content = (
    <form
      onSubmit={handleSubmit}
      noValidate
    >
      <PersonalInfo
        formData={formData}
        handleChange={handleChange}
      />

      <button
        className='btn btn-secondary'
        type='submit'
        //disabled={!canSave}
      >
        Registrar usuario
      </button>
    </form>
  )

  return content
}

export default NewUserForm
