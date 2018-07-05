import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Posts from './Posts';
import About from './About';
import PostDetails from './PostDetails';
import AddPost from './AddPost';

const Main = () => {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={Posts}/>
            <Route exact path='/About' component={About}/>
            <Route exact path='/posts/add' component={AddPost}/>
            <Route exact path='/posts/:id' component={PostDetails}/>
        </Switch>
    </div>
  )
}

export default Main;
