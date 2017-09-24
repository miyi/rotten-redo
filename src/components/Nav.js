import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">Rotten Tomatoes</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">All Movie Ratings</Link>
          </li>
          <li>
           <Link to="/create">Add New Movies</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><button className="btn btn-info log">Log In</button></li>
          <li><button className="btn btn-danger log">Log out </button></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;