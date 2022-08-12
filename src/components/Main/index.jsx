import React from 'react'
import { useState } from 'react'
import { getInitialData } from '../../utils/'
import SearchBar from './components/SearchBar';
import NotesList from './components/NotesList';

const Main = () => {
  const [data, setData] = useState(getInitialData())
  const [filteredData, setFilteredData] = useState(data)
  const activeNotes = filteredData.filter((item) => { 
    return !item.archived 
  })

  const archivedNotes = filteredData.filter((item) => { 
    return item.archived 
  })

  return (
    <div className='note-app__body'>
        <SearchBar data={ data } searchBarHandler={ setFilteredData }/>

        <h2>Active Note's</h2>
        <NotesList data={ activeNotes } />

        <h2>Archived Note's</h2>
        <NotesList data={ archivedNotes } />
    </div>
  )
}

export default Main