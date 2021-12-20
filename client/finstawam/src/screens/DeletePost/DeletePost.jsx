import React from 'react'
import './DeletePost.css'
import Layout from '../../components/Layout/Layout'
import { deletePost } from '../../services/apiCall'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function DeletePost(props) {

  const [post, setPost] = useState({})
  const params = useParams()

  useEffect(() => {
    const foundPost = props.posts.find(post => {
      return post._id = params.id
    })
    setPost(foundPost)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    deletePost(post._id)
  }

  return (
    <Layout>
      <button onClick={handleSubmit}>Delete</button>
    </Layout>
  )
}
