import React, { useState } from 'react';
import './searchbar.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import SearchIcon from "@mui/icons-material/Search";
import ntaCodes from '../ntaCodes';
import { useNavigate } from "react-router-dom";

function Searchbar(props) {
    const formatResult = (item) => {
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left', cursor:'pointer' }}>{item.name}</span>
          </>
        )
      }

    function getNTACode(name) {
      for (const code in ntaCodes) {
        if (ntaCodes[code] === name) {
          return code;
        }
      }
      return name; // Return null if name not found
    }

    const navigate = useNavigate();
    const onSelectNta = (e) => {
        navigate('/map?loc='+e); // redirect to new page
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      let nta = getNTACode(event.target[0].value);
      props.setNta(nta);
      onSelectNta(nta);
    };


    return (
      <form className="searchForm" onSubmit={handleSubmit}>
        <div className="searchContainer">
        <ReactSearchAutocomplete
            items={Object.entries(ntaCodes).map(([code, name]) => ({ code, name }))}
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