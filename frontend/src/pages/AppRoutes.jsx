import React from 'react'
import { Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import ErrorPapge from './ErrorPapge';
import Layout from './Layout';
import NewsItem from 'components/NewsItem/NewsItem';
import AllNews from './AllNews/AllNews';


export default function AppRoutes() {
    return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="news/" element={<AllNews />} />
            <Route path="/news/:id" element={<NewsItem />} />
          </Route>
          <Route path="*" element={<ErrorPapge />} />
        </Routes>
      );
}
