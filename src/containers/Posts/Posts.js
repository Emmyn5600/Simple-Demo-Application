import React, { useState } from "react";
import NewPost from "../../components/NewPost";

import Post from "../../components/Post";
import "./Posts.css";
const Posts = () => {
  const [posts, setPosts] = useState([
    {
      id: "124",
      name: "Emmy",
      number: "0785182823",
      title: "work",
      content: "Work Hard",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const addNewHandle = (pos) => {
    console.log("pos:::", pos);
    setIsOpen(!isOpen);
    setPosts([...posts, pos]);
  };
  const arr = posts.map((post) => {
    console.log(post.name);

    return (
      <Post
        key={post.id}
        name={post.name}
        number={post.number}
        title={post.title}
        content={post.content}
        clicked={() => this.postSelectedHandler(post.id)}
      />
    );
  });

  console.log(posts);

  return (
    <div>
      <section className="Posts">
        <button onClick={addNewHandle}> ADD NEW CONTENT </button>
        {isOpen ? <NewPost posts={posts} func={addNewHandle} /> : null}
        {arr}
      </section>
    </div>
  );
};
export default Posts;
