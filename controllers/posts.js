import Post from '../models/post.js'

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({error: error.message})
  }
}

export const getPost = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findById(id)
    if (post) {
      return res.json(product)
    }
    res.status(404).json({ message: 'Product not found!'})
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message})
  }
}

