import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class PostDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            details:''
        }
    }

    getPostDetails(){
        let id=this.props.match.params.id;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res=>{
                this.setState({
                    details:res.data
                })
            }).catch((err)=>console.log(err));
    }

    componentDidMount(){
        this.getPostDetails();
    }

    delete(){
        let id=this.state.details.id;
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res=>{this.props.history.push('/')})
            .catch(err=>{console.log(err)});
    }
  render() {
    return (
      <div>
          <br/>
        <Link className="btn grey" to="/">Back</Link>
        <br/>
        <h1>{this.state.details.title}</h1>
        <ul className="collection">
            <li className="collection-item">{this.state.details.body}</li>
        </ul>
        <Link to={`/posts/edit/${this.state.details.id}`} className="btn">Edit</Link>
        <button className="btn red right" onClick={this.delete.bind(this)}>Delete</button>
      </div>
    )
  }
}
