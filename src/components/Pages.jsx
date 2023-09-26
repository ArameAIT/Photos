import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from './MainLayout';
import App from '../App';
import Picture from './Picture';
import Photos from './Photos';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children : [
        {
            path : "",
            element : <App/>
         }
      ]
    },
  ]);

function Pages() {
  return (
    <div>
          <RouterProvider router={router} />
    </div>
  )
}

export default Pages