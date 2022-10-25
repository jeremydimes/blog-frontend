import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      Search Filter:{" "}
      <input
        type="text"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
        type="text"
        list="titles"
      />
      <datalist id="titles">
        {props.posts.map((post) => (
          <option key={post.id}>{post.title}</option>
        ))}
      </datalist>
      /> .filter((post) =>
      post.title.toLowerCase().includes(searchFilter.toLowerCase()))
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p>{post.body}</p>
          <button onClick={() => props.onSelectPost(post)}>More info</button>
        </div>
      ))}
    </div>
  );
}
