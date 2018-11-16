import React from 'react'

const InputForm = ({value, onChange, onSubmit, placeholder, objectId, button}) => (
  <form className="input-form" onSubmit={onSubmit}>
    <input type="hidden" value={objectId} />
    <input className="bottom-input" type="text" value={value} placeholder={placeholder} onChange={onChange} />
    <input className="bottom-submit" type="submit" value={button}/>
  </form>
)
export default InputForm
