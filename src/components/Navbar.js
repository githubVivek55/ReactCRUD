import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
            <div className="nav-wrapper blue darken-3">
            <a href="/" className="brand-logo">My Post</a>
            <a href="" data-target="mobile-demo" className="sidenav-trigger">
                <i className="fa fa-bars"></i></a>
                <ul className="right hide-on-small-only">
                <li><Link to="/"><i className="fa fa-users"></i>Posts</Link></li>
                </ul>
            </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
            <li><i className="fa fa-users"></i><Link to="/">Posts</Link></li>
            <li><i className="fa fa-plus"></i><Link to="/posts/add">Add Post</Link></li>
            <li><i className="fa fa-plus"></i><Link to="/About">About Us</Link></li>
        </ul>
      </div>
    )
  }
}
