import React from 'react';
import '../css/search-result.css';

const SearchResult = (props)=>{
    return (
        <div className="search-result-text-container">
            {
                props.searchInvoked ? 
                    props.users.length ?
                        <div className="result-display-container">
                            <div className="search-display-text">{props.users.length} user(s) found</div>
                            <div className="sort-container">
                                <label htmlFor="sort-dropdown">Sort by:</label>
                                <select id="sort-order">
                                    <option value="asc">Ascending</option>
                                    <option value="desc">Descending</option>
                                </select>
                            </div>
                        </div>
                    :
                        <div className="search-display-text">Sorry, could not perform this search</div>
                    :
                    <div></div>
            }
        </div>
    );
}
export default SearchResult;