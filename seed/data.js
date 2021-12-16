import db from '../db/connection'
import Post from '../models/post'

const insertData = async () => {
  await db.dropDatabase()

  const posts = [
    {
      author: 'Dr. Suess',
      story: 'Some big story with a big plot twist at the end, give it a like please',
      userImg: 'url.com',
      title: 'The Fishing Adventure',
      postPic: 'url.com'
    },
    {
      author: 'Elliot T',
      story: 'Another big story with a big plot twist at the end, give it a like please',
      userImg: 'url.com',
      title: 'The Coding Adventure',
      postPic: 'url.com'
    },
    {
      author: 'Master Chief',
      story: 'An even bigger story with a big plot twist at the end, give it a like please',
      userImg: 'url.com',
      title: 'Halo Infinite',
      postPic: 'url.com'
    }
  ]

  await Post.insertMany(posts)
  console.log('Created posts!!!')

  db.close()
}

insertData()