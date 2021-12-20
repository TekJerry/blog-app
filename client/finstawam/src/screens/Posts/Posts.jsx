import React from 'react'
import Card from '../../components/Card/Card'
import Layout from '../../components/Layout/Layout'


export default function Posts({ posts }) {
  return (
    <Layout>
      <div>
        <div className="allcontent">
          {posts.map((post) => (
            <Card
              key={post._id}
              author={post.author}
              title={post.title}
              userImg={post.userImg}
              postPic={post.postPic}
              story={post.story}
              post={post}
            />))}
        </div>
      </div>
    </Layout>
  )
}
