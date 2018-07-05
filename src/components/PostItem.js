import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class PostItem extends Component {
    constructor(props){
        super(props);
        this.state={
            item:props.item
        }
    }
  render() {
    return (
        <li className="collection-item">
            <Link to={`/Posts/${this.state.item.id}`}>{this.state.item.title}</Link>
        </li>
    )
  }
}
