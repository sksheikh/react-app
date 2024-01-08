import React from 'react'
import { Link } from 'react-router-dom';

import {blogs} from '../blogsData.js'


export default function Blogs() {
  const shortDescription = (str, num) => {
    if(str.length > num){
      return str.slice(0, num) + '...';
    }else{
      return str;
    }
  }

  return (
    <section className='blogs'>
      {blogs.map((blog) => {
        const {title, description} = blog;
        return <article>
          <h4>{title}</h4>
          <p>{shortDescription(description, 50)}</p>
          <Link to={title} className='nav-link'>Read more</Link>
        </article>
      })}
    </section>
  )
}

