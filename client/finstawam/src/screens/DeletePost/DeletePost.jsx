import React from 'react'
import './DeletePost.css'
import Layout from '../components/Layout/Layout.jsx'
import { deletePost } from '../../services/apiCall'

export default function DeletePost() {

  const handleSubmit = (e) => {
    e.preventDefault()
    await deletePost(id)
  }

  return (
    <Layout>
      <Card id={id} />
      <button onSubmit={handleSubmit}>Delete</button>
    </Layout>
  )
}
