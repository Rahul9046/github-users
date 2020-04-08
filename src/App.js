import React, {Component} from 'react';
import Header from './components/header';
import SearchResult from './components/search-result';
import Users from './components/users.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.searchInvoked = false;
  }
  handleSearch = (items)=>{
    this.searchInvoked = true;
    this.setState({ users: items || []});
  }
  render(){
    let users = this.state.users;
    return (
      <div className="App">
          <Header handleSearch={this.handleSearch}/>
          <SearchResult users={users} searchInvoked = {this.searchInvoked}/>
          <Users users={users}/>
      </div>
    );
  }
}

export default App;
