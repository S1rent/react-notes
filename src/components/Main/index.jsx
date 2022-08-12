import React from 'react'
import { useState } from 'react'
import { getInitialData } from '../../utils/'
import SearchBar from './components/SearchBar';
import NotesList from './components/NotesList';

const Main = () => {
  const [data, setData] = useState(getInitialData())
  const [keyword, setKeyword] = useState("")

  const activeNotes = data.filter((item) => {
    return item.title.toLowerCase().includes(keyword)
  }).filter((item) => { 
    return !item.archived 
  })

  const archivedNotes =  data.filter((item) => {
    return item.title.toLowerCase().includes(keyword)
  }).filter((item) => { 
    return item.archived 
  })

  const moveData = (id) => {
    let copyData = [...data]

    let targetData = null
    for (let i = 0; i < copyData.length; i++) {
        if(copyData[i].id === id) {
            targetData = copyData[i]
            break
        } 
    }

    targetData.archived = !targetData.archived
    setData(copyData)
  }

  return (
    <div className='note-app__body'>
        <h2>Search Note's</h2>
        <SearchBar data={ data } searchBarHandler={ setKeyword }/>

        <h2>Active Note's</h2>
        <NotesList data={ activeNotes } setData={ moveData } />

        <h2>Archived Note's</h2>
        <NotesList data={ archivedNotes } setData={ moveData } />
    </div>
  )
}

export default Main