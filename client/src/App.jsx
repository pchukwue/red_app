import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {router} from './router';
import {RouterProvider} from 'react-router-dom';
 
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
};

export default App
