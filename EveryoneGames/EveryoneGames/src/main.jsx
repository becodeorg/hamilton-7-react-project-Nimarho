import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from './App'
import './index.css'
import Root from './routes/root';
import ErrorPage from './routes/errorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root test={"Wonder if this will work"} />,
    errorElement: <ErrorPage />,
    //loader: rootLoader,
    //action: rootAction,
    /*children: [
      {
        path: "contacts/:id",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
      },
    ],*/
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
