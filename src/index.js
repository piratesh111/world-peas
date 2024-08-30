import React from 'react';
import Shop from '../src/routes/shop'
import Basket from './routes/basket';
import App from './App';
import './index.css';

import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from  "react-router-dom";
import store from './components/store';





 const Router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    }, 
    {
      path:"shop",
      element: <Shop></Shop>
    },
    {
      path:"basket",
      element: <Basket></Basket>
    }
]) 



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider  router={Router}></RouterProvider>
    </React.StrictMode>
)

