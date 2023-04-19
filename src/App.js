import React from 'react';

import './App.css';
import './components/styles.css'

import Home from './Pages/Home.js';
import AboutUs from './Pages/AboutUs';
import BookingPage from './Pages/BookingPage';
import MenuPage from './Pages/Menu';
import OrderOnlinePage from './Pages/OrderOnlinePage';

import ConfirmedBooking from './components/BookingComponents/BookingConfirmation'

import Header from './components/Header';

import {Routes, Route, useLocation} from 'react-router-dom'




function App() {
  const location = useLocation()
  const isConfirmedReservationPage = location.pathname === '/confirmedReservation'
  const isMenuPage = location.pathname === '/menu'

  return (
    <>
    {!isConfirmedReservationPage && !isMenuPage && (
      <div>
        <Header className='header'/>
      </div>
    )}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/menu' element={<MenuPage/>}/>
        <Route path='/reservations' element={<BookingPage/>} />
        <Route path='/confirmedReservation' element={<ConfirmedBooking/>}/>
        <Route path='/online-order' element={<OrderOnlinePage/>}/>
      </Routes>
    </>
  );
}

export default App;
