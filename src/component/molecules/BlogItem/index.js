import React from "react";
import "./blogitem.scss";
import { RegisterBg } from "../../../assets";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>

        <p className="body">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum iure
          placeat doloribus perferendis provident, sapiente eveniet
          necessitatibus possimus quibusdam reprehenderit ipsa totam amet
          voluptates laudantium ad mollitia, voluptatem non aut.
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
