import React, { useEffect, useState } from "react";
import "./createBlog.scss";
import { Input, Button, Upload, TextArea, Gap, Link } from "../../component";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const CreateBlog = () => {
  const history = useHistory();

  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const [image, setImage] = useState("");

  const [blogPost, setBlogPost] = useState([
    {
      title: "",
      image: "",
      body: "",
    },
  ]);

  const handleChange = (event) => {
    setBlogPost({ ...blogPost, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userObject = {
      title: blogPost.title,
      image: blogPost.image,
      body: blogPost.body,
    };

    // const dataA = new FormData();
    // dataA.append("file", blogPost);
    // console.log("append", blogPost);

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8",
      // "Content-Type": "application/x-www-form-urlencoded",

      // "Content-Type": "application/x-www-form-urlencoded",
      // multipart/form-data
      // Authorization: "JWT fefege...",
    };

    // console.log("hasil before: ", userObject);

    let url = "http://127.0.0.1:4000/v1/blog/post";
    // Axios.post(url, userObject, {
    //   headers: headers,
    // })
    //   .then((res) => {
    //     console.log("response hasil : ", res.data);
    //   })
    //   .catch((err) => {
    //     console.log("errornya: ", err.response);
    //   });

    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(userObject),
    })
      .then((result) => {
        console.log("fetch result: ", result);
      })
      .catch((err) => {
        console.log("errornya: ", err);
      });

    setBlogPost({
      title: "",
      image: "",
      body: "",
    });
    // Axios.post("localhost:4000/v1/blog/post", data)
    //   .then((res) => {
    //     console.log("hasilnya: ", res);
    //   })
    //   .catch((err) => {
    //     console.log("errornya: ", err);
    //   });
  };
  // const submit = () => {
  //   const data = {
  //     title: title,
  //     image: image,
  //     body: body,
  //   };
  //   console.log("data", data);
  //   Axios.post("localhost:4000/v1/blog/post", data)
  //     .then((res) => {})
  //     .catch(() => {
  //       console.log("dont send!");
  //     });
  // };

  useEffect(() => {
    // Axios.post("localhost:4000/v1/blog/post", data);
  }, []);

  return (
    <div className="blog-post">
      <Link title="Back" onClick={() => history.push("/")} />
      <p className="title">Crate New Blog Post</p>
      <Input
        label="Post Title"
        value={blogPost.title}
        onChange={handleChange}
        name="title"
      />
      <Upload name="image" value={blogPost.image} onChange={handleChange} />
      <TextArea name="body" value={blogPost.body} onChange={handleChange} />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" onClick={handleSubmit} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreateBlog;
