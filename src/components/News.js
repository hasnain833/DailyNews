import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    if (props.setProgress) props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=dc5984cc95204e8e8a2a94fb91daec99&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);
    if (props.setProgress) props.setProgress(30);

    const response = await fetch(url);
    if (props.setProgress) props.setProgress(50);
    const data = await response.json();

    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
    if (props.setProgress) props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - DailyNews`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=dc5984cc95204e8e8a2a94fb91daec99&page=${nextPage}&pageSize=${props.pageSize}`;
    const response = await fetch(url);
    const data = await response.json();

    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
  };

  // const handleNextClick = async () => {
  //   setPage(page + 1);
  //   updateNews();
  // };

  // const handlePreviousClick = () => {
  //   setPage(page - 1);
  //   updateNews();
  // };

  return (
    <div className="container my-3">
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}>
        DailyNews - Top Headlines from {capitalizeFirstLetter(props.category)}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}>
        <div className="row">
          {articles.map((e) => (
            <div className="col-md-3" key={e.url}>
              <NewsItem
                title={e.title ? e.title.slice(0, 45) : ""}
                newsurl={e.url}
                description={e.description ? e.description.slice(0, 88) : ""}
                imgurl={
                  e.urlToImage
                    ? e.urlToImage
                    : "https://s.hdnux.com/photos/01/40/70/34/25397031/3/rawImage.jpg"
                }
                author={e.author || "Unknown"}
                date={e.publishedAt || ""}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between my-3">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={handleNextClick}
            disabled={
              page >=
              Math.ceil(totalResults / props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div> */}
    </div>
  );
};

News.defaultProps = {
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
