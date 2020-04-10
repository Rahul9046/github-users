import React, {Component} from 'react';
import Header from './components/header';
import SearchResult from './components/search-result';
import Users from './components/users.js';
import Modal from './components/modal';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showModal: false,
      selectedUser: undefined
    }
    this.searchInvoked = false;
  }
  handleSearch = (items)=>{
    this.searchInvoked = true;
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
  render(){
    let {users, showModal, selectedUser} = this.state;
    return (
      <div className="App">
          <Header handleSearch={this.handleSearch}/>
          <SearchResult users={users} searchInvoked = {this.searchInvoked}/>
          <Users users={users} setSelectedUserState={this.setSelectedUserState}/>
          <Modal showModal = {showModal} selectedUser={selectedUser} setModalDisplayHandler={this.setModalDisplayHandler}/>
      </div>
    );
  }
}

export default App;
