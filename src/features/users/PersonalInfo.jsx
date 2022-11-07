const PersonalInfo = ({ formData, handleChange }) => {
  return (
    <fieldset className='row g-3 needs-validation'>
      <legend className='col-12 text-dark'>Información Personal</legend>
      <div className='col-md-6'>
        <label
          htmlFor='idType'
          className='form-label'
        >
          Tipo de identificación *
        </label>
        <select
          className='form-select'
          id='idType'
          name='idType'
          value={formData.idType}
          onChange={handleChange}
          required
        >
          <option value=''>Seleccione...</option>
          <option value='Cédula de Ciudadanía'>Cédula de Ciudadanía</option>
          <option value='Cédula de Extranjería'>Cédula de Extranjería</option>
          <option value='Pasaporte'>Pasaporte</option>
          <option value='Tarjeta de identidad'>Tarjeta de identidad</option>
          <option value='Registro civil'>Registro civil</option>
          <option value='Carné diplomático'>Carné diplomático</option>
          <option value='Salvoconducto'>Salvoconducto</option>
          <option value='Permiso especial de permanencia'>
            Permiso especial de permanencia
          </option>
          <option value='Documento extranjero'>Documento extranjero</option>
          <option value='Sin identificación'>Sin identificación</option>
        </select>
        <div className='invalid-feedback'>Campo requerido!</div>
      </div>
      <div className='col-md-6'>
        <label
          htmlFor='idNumber'
          className='form-label'
        >
          Número de identificación *
        </label>
        <input
          type='text'
          className='form-control'
          name='idNumber'
          id='idNumber'
          value={formData.idNumber}
          onChange={handleChange}
          required
          placeholder='123456'
        />
        <div className='invalid-feedback'>Campo requerido!</div>
      </div>
      <div className='col-md-6'>
        <label
          htmlFor='name'
          className='form-label'
        >
          Nombres *
        </label>
        <input
          type='text'
          className='form-control'
          name='name'
          id='name'
          value={formData.name}
          onChange={handleChange}
          required
          placeholder='Juan Andrés'
        />
        <div className='invalid-feedback'>Campo requerido!</div>
      </div>
      <div className='col-md-6'>
        <label
          htmlFor='lastname'
          className='form-label'
        >
          Apellidos *
        </label>
        <input
          type='text'
          className='form-control'
          name='lastname'
          id='lastname'
          value={formData.lastname}
          onChange={handleChange}
          required
          placeholder='Castro Fernández'
        />
        <div className='invalid-feedback'>Campo requerido!</div>
      </div>
    </fieldset>
  )
}

export default PersonalInfo
