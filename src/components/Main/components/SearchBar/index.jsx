import React from 'react'
import { useState } from 'react'

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState("")
  const { data, searchBarHandler } = props

  const onKeywordChange = (event) => {
    const word = event.target.value.trim()
    setKeyword(word)
  }

  return (
    <div>
        <form className='note-input'>
            <input 
                type="text"
                placeholder="Search note"
                value={ keyword }
                onChange={ onKeywordChange } />
        </form>
    </div>
  )
}

export default SearchBar