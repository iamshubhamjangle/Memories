import React from "react";
import moment from "moment";
import "./styles.css";

function Post({ post }) {
  return (
    <div className="card">
      <img
        src="https://th.bing.com/th/id/R.5420c0857fb3d070224712512ae45af0?rik=b7EMRer0hoUE7A&riu=http%3a%2f%2fwww.liveenhanced.com%2fwp-content%2fuploads%2f2018%2f03%2fTourist-Spots-In-The-Philippines.jpg&ehk=UACkzzAWbVDNetxUez2LFfZmDX6jlJj2%2fs5nEijrHpU%3d&risl=&pid=ImgRaw&r=0"
        className="card-img-top"
        alt={post.title}
      />
      <div className="card-body">
        {post.tags.map((tag, idx) => {
          return (
            <span key={idx} className="badge bg-dark">
              {tag}
            </span>
          );
        })}
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">@{post.creator}</p>
        <p className="card-text">{moment(post.createdAt).fromNow()}</p>
        <p className="card-text">{post.message}</p>
        <button>Like: {post.likeCount}</button>
        <button onClick={() => {}}>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Post;
