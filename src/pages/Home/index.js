import React, { useEffect } from "react";
import { Button, BlogItem, Gap } from "../../component";
import "./home.scss";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
const axios = require("axios");

const Home = () => {
  const [dataBlog, setDataBlog] = useState([]);

  const stateGlobal = useSelector(state => state);

  console.log("state Global : ", stateGlobal)

  const history = useHistory();

  useEffect(() => {
    axios
      // .get("http://localhost:4000/v1/blog/posts")
      // .get("http://localhost:4000/v1/blog/posts?page=2&perPage=2")
      .get("http://localhost:4000/v1/blog/posts?page=1&perPage=10")
      .then((result) => {
        console.log("headers: ", result.headers);
        console.log("Data API", result.data);
        const responseAPI = result.data;

        setDataBlog(responseAPI.data);
      })
      .catch((err) => {
        console.log("Eorr disini: ", err);
      });
  }, []);

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="create blog"
          onClick={() => history.push("create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        {dataBlog.map((blog) => {
          return (
            <BlogItem
              key={blog._id}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
              image={`http://localhost:4000/${blog.image}`}
            />
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
