import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Post(props) {
    const [post, setPost] = useState({})

    const params = useParams()

    useEffect(() => {
        const foundPost = props.posts.find(post => {
            return post._id === params.id
        })
        setPost(foundPost)
    }, [props.posts, params.id])

    return (
        <div>
            { post && post.title &&
                <>
                    <img src={`${post.postPic}`} />
                    <img src={`${post.userImg}`} />
                    <h2>{post.title}</h2>
                    <h4>{post.author}</h4>
                    <p>{post.story}</p>
                    <Link to={`/post/edit/${post._id}`}>Edit Me</Link>
                    <Link to={`/post/delete/${post._id}`}>Delete Me</Link>
                </>
            }
        </div>
    )
}

