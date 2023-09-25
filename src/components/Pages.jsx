import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from './MainLayout';
import App from '../App';
import Picture from './Picture';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children : [
        {
            path : "",
            element : <App/>
         },
         {
          path : "picture",
          element : <Picture/>
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