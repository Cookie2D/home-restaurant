import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/NotFound/ErrorPage';

function RootLayout() {
  return <div>
    <Outlet />
  </div>
}


const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/' element={<Navigate to='/home' />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;