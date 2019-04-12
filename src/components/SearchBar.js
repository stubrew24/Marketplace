import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchBar = (props) => <Input fluid icon='search' placeholder='Search...' onChange={props.onSearch} value={props.searchTerm} className="searchbar"/>

export default SearchBar
