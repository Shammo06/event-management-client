import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Root from './component/Root/Root';
import Services from './component/Home/Services/Services';
import Registration from './component/Resgistration/Registration';
import SignIn from './component/SignIn/SignIn';
import LearnMore from './component/LearnMore/LearnMore';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path:"/",
        element : <Home></Home>  
      },
      {
        path:"/services",
        element: <Services></Services>
      },
      {
        path:"/signIn",
        element : <SignIn></SignIn> 
      },
      {
        path:"/registration",
        element : <Registration></Registration>  
      },
      {
        path:"/learnMore/:key",
        loader: () =>fetch('/services.json'),
        element: <LearnMore></LearnMore>
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
