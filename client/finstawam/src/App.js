import "../src/services/apiCall";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPosts } from "../src/services/apiCall";
import Form from "./components/Form/Form";
import Posts from "./screens/Posts/Posts";
import Post from "./screens/Post/Post";
import EditPost from "./screens/EditPost/EditPost";
import DeletePost from "./screens/DeletePost/DeletePost";

function App() {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const grabPosts = async () => {
      const res = await getPosts();
      console.log(res);
      setPosts(res);
    };
    grabPosts();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/api/post/:id" element={<Post posts={posts} />} />
        <Route path="/" element={<Posts posts={posts} />} />
        <Route path="/api/posts/new" element={<Form />} />
        <Route path="/post/edit/:id" element={<EditPost posts={posts} />} />
        <Route path="/post/delete/:id" element={<DeletePost posts={posts} />} />
      </Routes>
    </div>
  );
}

export default App;
