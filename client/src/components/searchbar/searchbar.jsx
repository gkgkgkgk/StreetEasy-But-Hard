import React, { useState } from 'react';
import './searchbar.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import SearchIcon from "@mui/icons-material/Search";

function Searchbar(props) {
    const [searchTerm, setSearchTerm] = useState('');

    const items = [
        {
          id: 0,
          name: 'East Village'
        },
        {
          id: 1,
          name: 'Upper West Side'
        },
        {
          id: 2,
          name: 'West Village'
        },
        {
          id: 3,
          name: 'Point Slope'
        },
        {
          id: 4,
          name: 'Harlem'
        }
      ]

    const formatResult = (item) => {
        return (
          <>
            {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
            <span style={{ display: 'block', textAlign: 'left', cursor:'pointer' }}>{item.name}</span>
          </>
        )
      }

    const handleSubmit = (event) => {
      event.preventDefault();
      props.onSelect(event.target[0].value)
    };

    return (
      <form className="searchForm" onSubmit={handleSubmit}>
        <div className="searchContainer">
        <ReactSearchAutocomplete
            items={items}
            onSearch={props.handleOnSearch}
            placeholder='Enter a neighborhood or address here...'
            styling={{fontSize:'24px', height: "70px", borderRadius: "0px, 0px, 0px, 0px"}}
            autoFocus
            formatResult={formatResult}
            showIcon={false}
          />
          
          </div>
          <button className='searchButton'>
              <SearchIcon></SearchIcon>
          </button>
          </form>
    );
}

export default Searchbar;