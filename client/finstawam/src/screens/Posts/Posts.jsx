import React from 'react'
import Card from '../../components/Card/Card'


export default function Posts({posts}) {
    return (
        <div>
            <div className="allcontent">
                {posts.map((post) => (
                <Card 
                key = {post._id}
                author={post.author}
                title={post.title}
                userImg={post.userImg}
                postPic={post.postPic}
                story={post.story}

                />))}
            </div>
        </div>
    )
}
