import React, { useState } from "react";
import "./NewPost.css";

const NewPost = ({ func }) => {
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  const postDataHandler = () => {
    let posts = [];
    const data = {
      id: { id },

      description: { description },
      name: { name },
    };
    posts.push(data);
    console.log(posts);

    console.log("po", posts);
    func(posts);
  };
  return (
    <div className="NewPost">
      <h1>Add a Post</h1>
      <label>ID</label>
      <input
        type="text"
        value={id}
        onChange={(event) => setId(event.target.value)}
      />

      <label>Content</label>
      <textarea
        rows="4"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <label>Name</label>
      <select value={name} onChange={(event) => setName(event.target.value)}>
        <option value="Max">Max</option>
        <option value="Manu">Manu</option>
      </select>
      <button onClick={postDataHandler}>Add Post</button>
    </div>
  );
};

export default NewPost;
