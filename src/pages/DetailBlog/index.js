import React from "react";
import { RegisterBg } from "../../assets";
import "./detailBlog.scss";
import { Link, Gap } from "../../component"
import { useHistory } from 'react-router-dom'

const DetailBlog = () => {
  const history = useHistory();

  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, dolore.
        Molestias maxime laboriosam quia praesentium eveniet, rem odio numquam
        ipsum, porro id itaque officia omnis ducimus, sit dicta unde maiores.
      </p>
      <Gap height={20} />
      <Link title="Back to home" onClick={() => history.push('/')} />
    </div>
  );
};

export default DetailBlog;
