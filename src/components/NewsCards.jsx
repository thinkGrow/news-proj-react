import React from "react";

const NewsCards = ({ news }) => {
  return (
    <div>
      {news.title}
      <img src={news.image_url} alt="" />
    </div>
  );
};

export default NewsCards;
