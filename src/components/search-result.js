import React from 'react';
import '../css/search-result.css';

const SearchResult = (props)=>{
    return (
        <div className="search-result-text-container">
            {
                props.searchInvoked ? 
                    props.users.length ?
                        <div className="search-display-text">{props.users.length} user(s) found</div>
                    :
                        <div className="search-display-text">Sorry, could not perform this search</div>
                    :
                    <div></div>
            }
        </div>
    );
}
export default SearchResult;