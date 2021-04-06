import React from 'react';
import { IPost } from '../../Models/Posts';
import { Posts } from '../../Posts';
import { homeStyles } from './Home.ias';

export default function Home() {
  const styles = homeStyles();


 return (
   <div className={styles.wrapper}>
     {Posts.map((post: IPost, i: number) => <div key={i}>{post.title}</div>)}
   </div>
 );
}