import React, { Component } from 'react';
import axios from 'axios';
import PostItem from './PostItem'; 

class Posts extends Component {
  constructor(){
    super();
    this.state={
      posts:[]
    }
  }

  componentWillMount(){
    this.getPosts();
  }

  getPosts(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res=>{
        this.setState({
          posts:res.data
        },()=>{console.log(this.state)})
      });
  }
  render() {
    const postItems=this.state.posts.map((post,index)=>{
      return(
        <PostItem key={post.id} item={post}/>
      )
    })
    return (
      <div>
        <h1>Posts</h1>
        <ul className="collection">{postItems}</ul>
      </div>
    )
  }
}

export default Posts;