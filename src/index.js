import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Root from './routes/Root';
import SignIn from './routes/SignIn';
import Timetable from './routes/Timetable';
import Selector from './routes/Selector';
import Register from './routes/Register';
import ErrorPage from "./error-page";
import NavMenu from './Menu';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: ":dayName",
        element: <Timetable dayName=':dayName'/>,
        // children: [
        //   {
        //     path: "session/:sessionId",
        //     element: <Selector />,
        //     errorElement: <ErrorPage />, 
        //   },
        // ],
      },
      {
        path: "session/:sessionId",
        element: <Selector sessionID=':sessionID'/>,
      },
      {
        path: "menu",
        element: <NavMenu />,
      }
    ]
  },

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <BrowserRouter>
  //   <Routes>
  //     <Route exact path="/" element={<App/>} />
  //     <Route path="Schedule" element={<TimetableView />} />

  //   </Routes>
  // </BrowserRouter>,



  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
