import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCards from "../components/NewsCards";

// author: {name: 'Shirin Akter', published_date: '2025-04-22T17:00:00.000Z', img: 'https://randomuser.me/api/portraits/women/29.jpg'}
// category_id: 2
// details: // "Bangladesh's expoz"
// id : "bcdefa0123456789bcdefa01"
// image_url:

// others: {is_today_pick: true, is_trending: true}
// production: true
// rating: {number: 4, badge: 'trending'}
// tags: (5) ['exports', 'economy', 'business', 'growth', 'trade']
// thumbnail_url:
// title:
// total_view: // 6789

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="font-bold">Total {categoryNews.length}</h2>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCards news={news} key={news.id}></NewsCards>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
