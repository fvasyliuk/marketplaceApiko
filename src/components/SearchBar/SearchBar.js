import React from 'react';
import T from 'prop-types';
import s from './SearchBar.module.scss';
import { Input, Button } from '../../atoms';
//import { Button } from './components';



function SearchBar({ component: Component, ...rest }) {
  return (
    <div className={s.container}>
      <div className={s.searchInput}>
        <Input placeholder="Search products by name" name="search_icon.svg"/>
      </div>
      <div className={s.locationInput}>
        <Input placeholder="Location" name="location_filled.svg"/>
      </div>
      <div className={s.searchButton}>
        <Button color="#3E3961">Search</Button>
      </div>      
    </div>
  );
}


  
SearchBar.propTypes = {

};

export default SearchBar;