import React from 'react';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import PageNotFound from './Components/pageNotFound';
import UserGrid from './Components/userGrind';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Form />}/>
        <Route path='/users' element={<UserGrid/>}/>
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
