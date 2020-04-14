import React from 'react';
import '../assets/css/search-result.css';

const DESC = 'desc';

const SearchResult = (props)=>{
    let {users, searchInvoked, setSortedUsers} = props;
    const handleChange=  (evt)=>{
        const selectedValue = evt.target.value;
        if (selectedValue === DESC){
            users = users.sort((user1,user2)=>Math.round(user2.score) - Math.round(user1.score));
        } else{
            users = users.sort((user1,user2)=>Math.round(user1.score) - Math.round(user2.score));
        }
        setSortedUsers(users);
    };
    return (
        <div className="search-result-text-container">
            {
                searchInvoked ? 
                    users.length ?
                        <div className="result-display-container">
                            <div className="search-display-text">{users.length} user(s) found</div>
                            <div className="sort-container">
                                <label htmlFor="sort-dropdown">Sort by:</label>
                                <select id="sort-order" onChange={handleChange}>
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