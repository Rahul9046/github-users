import React from 'react';
import '../css/header.css';

const PROXY = 'https://cors-anywhere.herokuapp.com/';
const URL = 'https://api.github.com/search/users?q=';
const Header = (props)=>{
    let textInput = React.createRef();
    // handler for search button click
    let handleButtonClick = ()=>{
        let query = textInput.current.value;
        // fecth the result and then set the state
        fetch(`${PROXY}${URL}${query}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'access-control-allow-origin': 'http://localhost:3000'
              }
        }).then(res=>res.json()).then((data)=>{
            if (data.total_count > 30){
                let totalPages = Math.ceil(data.total_count / 30),
                    allPages = [],
                    i;
                    for (i = 0; i < totalPages; i++){
                        allPages.push(`&page=${i+1}`); 
                    }
                    Promise.all(allPages.map((pageNo)=>{
                        return  fetch(`${PROXY}${URL}${query}${pageNo}`, {
                            method: 'GET',
                            headers: {
                                'content-type': 'application/json',
                                'access-control-allow-origin': 'http://localhost:3000'
                              }
                        })
                    })).then((resArr)=>{
                        resArr = resArr.map(response=>response.json());
                        Promise.all(resArr).then((dataStream)=>{
                            let dataArr = [];
                            for (i = 0; i < dataStream.length; i++){
                                if (dataStream[i].items){
                                    dataArr = dataArr.concat(dataStream[i].items);
                                }
                            }
                            props.handleSearch(dataArr)
                        })
                    }).catch(err=>console.log(err));
            } else{
                props.handleSearch(data.items)
            }
        });
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