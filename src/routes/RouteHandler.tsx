import React, { useEffect } from 'react';
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../pages/home/Home';
import NewsArticle from '../pages/news-article/news-article';
import RestrictedRoutes from './RouteLayout';

type AppRoutesProps = {

}

const RouteHandler = ({ }: AppRoutesProps) => {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<RestrictedRoutes />} >
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsArticle />} />
        </Route>
      </Routes>
    </>
  );
}

export default RouteHandler;