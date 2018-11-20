import React from 'react'

const DeckForm = ({submit, change, values}) => (
  <React.Fragment>
    <h1>Make a new deck</h1>
    <form onSubmit={submit}>
        <div>
          <label htmlFor="name">Topic</label>
          <input name="name" type="text" value={values.name} onChange={change}/>
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea name="description" type="text" value={values.description} onChange={change}/>
        </div>

        <input type="submit"/>
    </form>
  </React.Fragment>
)

export default DeckForm
