import React from 'react';
import '../assets/css/loader.css';
import loader from '../assets/images/loader.gif'

const hideLoaderStyle = {
    display: 'none'
},
showLoaderStyle = {
    display: ''
};

const Loader = (props) => {
    let showLoader = props.showLoader;

    return (
        <div className="loader-container" style={showLoader ? showLoaderStyle : hideLoaderStyle}>
            <img className="loader-gif" src={loader} alt="loader-gif"></img>
        </div>    
    );
}

export default Loader;
