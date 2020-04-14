import React from 'react';
import '../assets/css/header.css';

const PROXY = 'https://cors-anywhere.herokuapp.com/';
const URL = 'https://api.github.com/search/users?q=';
const PER_PAGE = '&per_page=100';
const Header = (props)=>{
    let {showLoaderHandler, handleSearch, cache} = props;
    let textInput = React.createRef(), cacheData;
    // handler for search button click
    let handleButtonClick = ()=>{
        let query = textInput.current.value;
        showLoaderHandler(true);
        if (!(cacheData = cache[query])){
            // fecth the result and then set the state
            fetch(`${PROXY}${URL}${query}${PER_PAGE}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'access-control-allow-origin': 'http://localhost:3000'
                }
            }).then((res)=>{
                // if the status code is 403, that means that the APi usage limit has exceeded
                if (res.status === 403) {
                    throw new Error('Rate limit exceeded. Please try after some time');
                }
                return res.json();
            }).then((data)=>{
                    cache[query] = data;
                    handleSearch(data.items);
            }).catch((err)=>{
                console.log(err);

            }).finally(()=>{
                showLoaderHandler(false);
            });
        } else{
            handleSearch(cacheData.items);
            showLoaderHandler(false);
        }
    }
    return (
        <div className="header-main-container">
            <input type="text" className="search-input-box" ref={textInput} placeholder="Enter your search query"></input>
            <div className="search-button" onClick={handleButtonClick}>
                Search
            </div>
         </div>
    );
}
export default Header;