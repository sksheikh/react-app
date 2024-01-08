import React, { useEffect, useState } from 'react'

import {blogs} from '../blogsData.js'
import { useParams } from 'react-router-dom'

export default function Blog() {
  const param = useParams()
  const {title} = param
  const [blogData, setBlogData] = useState('');

  useEffect(()=> {
    const filteredBlog = blogs.filter((blog) => {
      return blog.title === title
    })
    setBlogData(filteredBlog[0])
  },[])
  return (
    <div>
      <h2>Single blog</h2>
      <h4>Title: {blogData.title}</h4>
      <p>Description: {blogData.description}</p>
    </div>
  )
}
