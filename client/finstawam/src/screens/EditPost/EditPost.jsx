import React from 'react'
import './EditPost'
import Layout from '../components/Layout/Layout.jsx'
import { getPost, updatePost } from '../../services/apiCall'
import { useState, useEffect } from 'react'

export default function EditPost({ id }) {

  const [post, setPost] = useState({
    author: '',
    title: '',
    story: '',
    userImg: '',
    postPic: '',
  })

  useEffect(() => {
    const findPost = async () => {
      const currentPost = await getPost({ id })
      setPost(currentPost)
    }
    findPost()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    await updatePost(id)
  }

  return (
    <Layout>
      <Card id={id} />
      <form ClassName="creat-post" onSubmit={handleSubmit}>
                <input 
                    className="input-author" 
                    placeholder="Author" 
                    value={post.author} 
                    name='author' 
                    required 
                    onChange={handleChange} 
                />
                <input 
                    className="input-title" 
                    placeholder="Title" 
                    value={post.title} 
                    name='title' 
                    required 
                    onChange={handleChange} 
                />
                <input 
                    className="input-story" 
                    placeholder="Story" 
                    value={post.story} 
                    name='story' 
                    required 
                    onChange={handleChange} 
                />
                <input 
                    className="input-userImg" 
                    placeholder="User Image URL" 
                    value={post.userImg} 
                    name='userImg' 
                    required 
                    onChange={handleChange} 
                />
                <input 
                    className="input-postPic" 
                    placeholder="Post Picture URL" 
                    value={post.postPic} 
                    name='postPic' 
                    required 
                    onChange={handleChange} 
                />
            </form>
      <button onSubmit={handleSubmit}>Edit Post</button>
    </Layout>      
  )
}
