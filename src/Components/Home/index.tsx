import React from 'react';
import { homeStyles } from './Home.ias';

export default function Home() {
  const {wrapper} = homeStyles;

  const posts = [

  ];

 return (
   <div className={wrapper}>
     {posts}
   </div>
 );
}