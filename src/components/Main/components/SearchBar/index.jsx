import React from 'react'
import { useState } from 'react'

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState("")
  const { data, searchBarHandler } = props

  const onKeywordChange = (event) => {
    const word = event.target.value.trim()
    setKeyword(word)

    if(word === "")
        searchBarHandler(data)
    else {
        const filteredData = data.filter((item) => {
            return item.title.toLowerCase().includes(word)
        })
        searchBarHandler(filteredData)
    }
    
  }

  return (
    <div>
        <form>
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