import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Posts } from '../../Data/Posts';
import { IPost } from '../../Models/Posts';
import Post from '../Post';
import { IPostProps } from '../Post/Post.ias';

export default function ViewPost() {
    const history = useHistory();
    const postProps = Posts.find((post: IPost) => post.title === history.location.pathname.slice(1));
    console.log('post props', postProps)

    return(
        <Switch>
            <Route path={"/Test"} component={(postProps: IPostProps) => Post(postProps)}/>
        </Switch>
    )
}