import React from 'react';
import { IPost } from '../../Models/Posts';
import { Posts } from '../../Posts';
import PostCard from '../../ReusableComponents/PostCard';
import { homeStyles } from './Home.ias';

export default function Home() {
  const styles = homeStyles();


 return (
   <div className={styles.wrapper}>
     {Posts.map((post: IPost, i: number) => {
       return (
         <PostCard 
          key={i}
          title={post.title}
          date={post.date}
          summary={post.summary}
         />
       );
     })}
   </div>
 );
}