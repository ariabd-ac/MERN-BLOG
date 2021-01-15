// import React, { } from "react";
import { Button, BlogItem, Gap } from "../../component";
import React, { useState, useEffect } from 'react'
import "./home.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataBlog } from "../../config/redux/action";
const axios = require("axios");

const Home = () => {
  const history = useHistory();
  const { dataBlog, page } = useSelector(state => state.homeReducer)
  // const [counter, setCounter] = useState(1)
  const [counter, setCounter] = useState(1)

  // console.log('State Global : ', dataBlog)
  const dispatch = useDispatch();

  console.log('page: ', page)

  useEffect(() => {
    dispatch(setDataBlog(counter))
    console.log('set data blog: ', setDataBlog)
  }, [counter, dispatch]);


  const onMinus = () => {
    setCounter(counter <= 1 ? 1 : counter - 1)
    console.log(counter)
  }

  const onPlus = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
    console.log(counter)
    // alert('hellow')
  }


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
        <Button title="Previous" onClick={onMinus} />
        <Gap width={20} />
        <p className="text-page">{page.current_page} / {page.totalPage}</p>
        <Gap width={20} />
        <Button title="Next" onClick={onPlus} />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
