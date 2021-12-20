import React from 'react'
import './EditPost'
import Layout from '../../components/Layout/Layout.jsx'
import { updatePost } from '../../services/apiCall'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function EditPost(props) {
  const params = useParams()

  const [post, setPost] = useState({
    author: '',
    title: '',
    story: '',
    userImg: '',
    postPic: '',
  })

  useEffect(() => {
    const foundPost = props.posts.find(post => {
      return post._id === params.id
  })
  setPost(foundPost)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updatePost(params.id, post)
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setPost({
      ...post,
      [name]: value
    })
  }

  return (
    <Layout>
      <form ClassName="creat-post">
                <input 
                    className="input-author" 
                    placeholder="Author" 
                    value={post.author} 
                    name='author' 
                    required 
                    onChange={(e) => handleChange(e)} 
                />
                <input 
                    className="input-title" 
                    placeholder="Title" 
                    value={post.title} 
                    name='title' 
                    required 
                    onChange={(e) => handleChange(e)} 
                />
                <input 
                    className="input-story" 
                    placeholder="Story" 
                    value={post.story} 
                    name='story' 
                    required 
                    onChange={(e) => handleChange(e)} 
                />
                <input 
                    className="input-userImg" 
                    placeholder="User Image URL" 
                    value={post.userImg} 
                    name='userImg' 
                    required 
                    onChange={(e) => handleChange(e)} 
                />
                <input 
                    className="input-postPic" 
                    placeholder="Post Picture URL" 
                    value={post.postPic} 
                    name='postPic' 
                    required 
                    onChange={(e) => handleChange(e)} 
                />
            </form>
      <button onClick={(e) => handleSubmit(e)}>Edit Post</button>
    </Layout>      
  )
}
