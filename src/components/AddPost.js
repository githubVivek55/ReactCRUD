import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class AddPost extends Component {
    addPost(newPost){
        axios.request({
            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts',
            data:newPost
        }).then(res=>{
            this.props.history.push('/');
        });
    }
    onSubmit(e){
        const newPost={
            title:this.refs.title.value,
            body:this.refs.body.value
        }
        this.addPost(newPost);
        console.log(newPost);
        e.preventDefault();
    }
  render() {
    return (
      <div>
          <br/>
          <Link className="btn grey" to="/">Back</Link>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
                <input type="text" name="title" ref="title"/>
                <label htmlFor="title">Title</label>
            </div>
            <div className="input-field">
            <input type="text" name="body" ref="body"/>
                <label htmlFor="body">Body</label>
            </div>
            <div className="input-field">
                <input type="submit" value="Save" className="btn"/>
            </div>
        </form>
      </div>
    )
  }
}
