import React from "react";

const NewsItem = (props) => {
    let { title, description, imgurl, newsurl, author, date } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author} on, {new Date(date).toDateString()}</small></p>
            <a
              href={newsurl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}
export default NewsItem;