import React from "react";
import { Link } from "react-router-dom";
import '../Card/Card.css'

export default function Card({ author, title, userImg, postPic, post, key }) {

  return (
    <div>
      <div className="container">
        <div className="postpic-container">
         
          <img src={postPic} />
          <h4>{title}</h4>
        </div>

        <div className="info-container">
          <img src={userImg} />
          <h5>{author}</h5>
        </div>
        <div className="btn">
          <button>
            <Link key={post._id} to={`/api/post/${key}`}>
              <p className="view-more">View More</p>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
