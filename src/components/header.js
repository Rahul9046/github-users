import React from 'react';
import '../css/header.css';

const URL = 'https://api.github.com/search/users?q=';
const Header = (props)=>{
    let textInput = React.createRef();
    // handler for search button click
    let handleButtonClick = ()=>{
        let query = textInput.current.value;
        // fecth the result and then set the state
        fetch(`${URL}${query}`).then(res=>res.json()).then(data=>props.handleSearch(data));
    }
    return (
        <div className="header-main-container">
            <input type="text" className="search-input-box" ref={textInput} placeholder="Enter your search query"></input>
            <div className="search-button" onClick={handleButtonClick}>
                Search
            </div>
            <hr className="search-container-divider"/>
         </div>
    );
}
export default Header;