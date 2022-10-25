import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    console.log("Going to get all posts...");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params, successCallback) => {
    console.log("handleCreatePost", params);
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexPosts, []);
  return (
    <div className="container">
      <button onClick={handleShowPost}>Show modal</button>
      <Modal show={isPostsShowVisible} onClose={handleHidePost}></Modal>

      <PostsNew onCreatePost={handleCreatePost} />
      <PostsNew onCreatePost={handleCreatePost} />
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <p>{currentPost.title}</p>
      </Modal>
    </div>
  );
}
