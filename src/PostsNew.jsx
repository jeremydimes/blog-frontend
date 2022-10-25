export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit new post");
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response);
      event.target.reset();
    });
    props.onCreatePost(params, () => event.target.reset());
  };
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" />
          Title: <input className="form-control" type="text" />
        </div>
        <div>
          Body: <input type="text" />
          Body: <input className="form-control" type="text" />
        </div>
        <div>
          Image: <input type="text" />
          Image: <input className="form-control" type="text" />
        </div>
        <button type="submit">Create posto</button>
      </form>
    </div>
  );
}
