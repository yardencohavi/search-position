const SearchBox = ({searchFiels , searchChange}) => {
    return(
        <div className="pa2">
        <input type="search" className="pa3 ba b--green " placeholder="Search" aria-label="Search"
        placeholder="search-poses" onChange={searchChange}/>
      </div>
    )
}

export default SearchBox;
