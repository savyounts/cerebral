import React from 'react'

const InputForm = ({value, onChange, onSubmit, placeholder, objectId}) => (
  <form onSubmit={onSubmit}>
    <input type="hidden" value={objectId} />
    <input type="text" value={value} placeholder={placeholder} onChange={onChange} />
    <input type="submit"/>
  </form>
)
export default InputForm
