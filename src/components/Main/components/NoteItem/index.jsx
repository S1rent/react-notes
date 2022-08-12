import React from 'react'

const NoteItem = (props) => {
  const { data } = props
  const { title, body, createdAt, archived } = data

  return (
    <div className='note-item'>
        <div className='note-item__content'>
            <h5 className='note-item__title'>{ title }</h5>
            <h6 className='note-item__date'>{ createdAt } </h6>
            <h6 className='note-item__body'>{ body }</h6>
        </div>

        <div className='note-item__action'>
            <button className='note-item__delete-button'>Delete</button>
            <button className='note-item__archive-button'>{ archived ? "Un-archive" : "Archive" }</button>
        </div>
    </div>
  )
}

export default NoteItem