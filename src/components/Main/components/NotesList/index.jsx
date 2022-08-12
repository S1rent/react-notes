import React from 'react'
import NoteItem from '../NoteItem'

const NotesList = (props) => {
  const { data, setData, deleteData } = props

  return (
    <div>
        <div className='notes-list'>
            {
                data.length == 0 ?
                <h6 className='note-item__title'>No Data.</h6>
                :
                data.map((item) => {
                    return <NoteItem data={ item } key={ item.id } setData={ setData } deleteData={ deleteData } />
                })
            }
        </div>
    </div>
  )
}

export default NotesList