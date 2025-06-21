import React from "react";
import { useParams } from "react-router-dom";

const CategoryNews = () => {
  const {id} = useParams();
//   console.log(obj);
  return <div>category - {id}</div>;
};

export default CategoryNews;
