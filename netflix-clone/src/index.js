import React, { Children } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import './index.css';
import ErrorPage from './ErrorPage';
import ProfilePage from './ProfilePage';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const container = document.getElementById('root');
const root = createRoot(container);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     errorElement: <ErrorPage/>,
//   },
//   {
//     path: "profile",
//     element: <ProfilePage/>,
//   },
//   {
//     path: "loginPage",
//     element: <LoginScreen/>,
//   },
//   {
//     path: "homeScreen",
//     element: <HomeScreen/>,
//   },
// ]);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={router} /> */}
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
