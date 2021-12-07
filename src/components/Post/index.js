import React from "react";

import "./Post.css";

const post = (props) => {
  return (
    <React.Fragment>
      {" "}
      <div className="Post" onClick={props.clicked}>
        <h1> {props.title}</h1>
        <p> {props.id}</p>
        <p> {props.name}</p>
        <p> {props.description}</p>
      </div>
    </React.Fragment>
  );
};

export default post;
