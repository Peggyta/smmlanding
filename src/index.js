import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorPage from './error-page';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css';
import App from './App';
import SignUp from './components/SignUp';
import Login from './components/Login';
//Fonts

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />
    },
    {
        path: "signup",
        element: <SignUp />
    },
    {
      path: "login",
      element: <Login />
    },

  ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <RouterProvider router={router} />
);

