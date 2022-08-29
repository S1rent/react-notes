import React from 'react'
import { useState } from 'react'

const CreateForm = (props) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const { createNoteHandler } = props

  const onTitleChange = (event) => {
    const titleInput = event.target.value
    if(titleInput.length <= 50)
        setTitle(titleInput)
  }

  const onBodyChange = (event) => {
    const bodyInput = event.target.value
    setBody(bodyInput)
  }

  const onCreateNote = () => {
    const newData = {
        id: new Date(),
        title: title.trim(),
        body: body.trim(),
        archived: false,
        createdAt: new Date().toISOString()
    }

    createNoteHandler(newData)
    setTitle('')
    setBody('')
  }

  return (
    <div>
        <form className='note-input' onSubmit={(e) => e.preventDefault()}>
            <input 
                type="text"
                placeholder="Title"
                value={ title }
                onChange={ onTitleChange } />
            <h6>{ 50 - title.length } character's remaining.</h6>

            <textarea 
                className='note-input__body'
                type=""
                placeholder="Body"
                value={ body }
                onChange={ onBodyChange } />

            <button onClick={ onCreateNote }>Create Note</button>
        </form>
    </div>
  )
}

export default CreateForm