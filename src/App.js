import React from 'react';

import './App.css';
import './components/styles.css'

import Home from './Pages/Home.js';
import AboutUs from './Pages/AboutUs';
import BookingPage from './Pages/BookingPage';

import BookingConfirmation from './components/BookingComponents/BookingConfirmation'

import Header from './components/Header';

import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <>
      <div>
        <Header className='header'/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/reservations' element={<BookingPage/>} />
        <Route path='/confirmedReservation' element={<BookingConfirmation/>}/>
      </Routes>
    </>
  );
}

export default App;
