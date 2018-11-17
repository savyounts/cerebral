import React from 'react'
import { Field, reduxForm } from 'redux-form'

let DeckForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Topic</label>
        <Field name="name" component="input" type="text"/>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <Field name="description" component="textarea" type="text" />
      </div>
      <button type="submit">Create Your Deck</button>
  </form>
)}

DeckForm = reduxForm({
  // a unique name for the form
  form: 'deck'
})(DeckForm)

export default DeckForm
