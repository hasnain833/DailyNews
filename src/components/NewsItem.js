import React from "react";

const NewsItem = (props) => {
    let { title, description, imgurl, newsurl, author, date } = props;
    return (
      <div className="my-3" style={{height: '100%'}}>
        <div className="news-card">
          <img src={imgurl} className="news-card-img" alt="..." />
          <div className="news-card-body">
            <h5 className="news-card-title">{title}...</h5>
            <p className="news-card-text">{description}...</p>
            <p className="news-card-meta">By {author} on, {new Date(date).toDateString()}</p>
            <a
              href={newsurl}
              target="_blank"
              rel="noopener noreferrer"
              className="news-card-btn"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}
export default NewsItem;