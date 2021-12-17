import './Form.css'
import { createPost} from '../../services/apiCall'
import { useState } from 'react'

export default function Form() {
    const [post, setPost] = useState({
        author: '',
        title: '',
        story: '',
        userImg: '',
        postPic: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost({ 
            ...post, 
            [name]: value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        await createPost(post)
    }

    return (
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
    )
}
