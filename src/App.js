import React, {Component} from 'react';
import Header from './components/header';
import SearchResult from './components/search-result';
import Users from './components/users.js';
import Modal from './components/modal';
import Loader from './components/loader';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showModal: false,
      showLoader: false,
      selectedUser: undefined
    }
    this.searchInvoked = false;
  }
  handleSearch = (items)=>{
    this.searchInvoked = true;
    // sort by user score in ascending at initial render
    items = items.sort((item1,item2)=>Math.round(item1.score) - Math.round(item2.score))
    this.setState({ users: items || []});
  }
  setModalDisplayHandler = (value)=>{
    this.setState({
      showModal: value
    });
  }
  setSelectedUserState = (state)=>{
      this.setState(state);
  }
  setSortedUsers = (users)=>{
    this.setState({ users });
  }
  showLoaderHandler = (value)=>{
    this.setState({ showLoader: value});
  }
  render(){
    let {users, showModal, selectedUser, showLoader} = this.state;
    return (
      <div className="App">
          <Header handleSearch={this.handleSearch} showLoaderHandler={this.showLoaderHandler}/>
          <hr className="search-container-divider"/>
          <SearchResult users={users} searchInvoked = {this.searchInvoked} setSortedUsers={this.setSortedUsers}/>
          <Users users={users} setSelectedUserState={this.setSelectedUserState} showLoaderHandler={this.showLoaderHandler}/>
          <Modal showModal = {showModal} selectedUser={selectedUser} setModalDisplayHandler={this.setModalDisplayHandler}/>
          <Loader showLoader={showLoader}/>
      </div>
    );
  }
}

export default App;
