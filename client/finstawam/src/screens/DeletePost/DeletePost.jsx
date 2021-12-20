import React from 'react'
import './DeletePost.css'
import Layout from '../../components/Layout/Layout'
import { deletePost } from '../../services/apiCall'
import Card from '../../components/Card/Card'

export default function DeletePost({ id }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    deletePost(id)
  }

  return (
    <Layout>
      <Card id={id} />
      <button onSubmit={handleSubmit}>Delete</button>
    </Layout>
  )
}
