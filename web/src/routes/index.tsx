import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import ErrorPage from '../pages/NotFound/ErrorPage';
import Header from '../components/common/Header/Header';
import Recomendation from '../pages/Recomendation/Recomendation';
import Fridge from '../pages/Fridge/Fridge';
import Recipes from '../pages/Recipes/Recipes';

function RootLayout() {
  return <div className='mx-20'>
    <Header />
    <Outlet />
  </div>
}


const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/recomendation' element={<Recomendation />}></Route>
          <Route path='/fridge' element={<Fridge />}></Route>
          <Route path='/recipes' element={<Recipes />}></Route>

          <Route path='/' element={<Navigate to='/recomendation' />}></Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;