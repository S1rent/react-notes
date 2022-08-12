import React from 'react'
import NoteItem from '../NoteItem'

const NotesList = (props) => {
  const { data } = props

  return (
    <div>
        <div className='notes-list'>
            {
                data.map((item) => {
                    return <NoteItem data={ item } key={ item.id } />
                })
            }
        </div>
    </div>
  )
}

export default NotesList