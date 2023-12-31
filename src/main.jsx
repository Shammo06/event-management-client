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
import LearnMore from './component/LearnMore/LearnMore';
import About from './component/About/About';
import OurStory from './component/OurStory/OurStory';
import LogIn from './component/LogIn/LogIn';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Feedback from './component/Feedback/Feedback';
import Contact from './component/Contact/Contact';
import Error from './component/Error/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
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
        path:"/login",
        element : <LogIn></LogIn>
      },
      {
        path:"/registration",
        element : <Registration></Registration>  
      },
      {
        path:"/learnMore/:key",
        loader: () =>fetch('/services.json'),
        element: <PrivateRoute><LearnMore></LearnMore></PrivateRoute>
        
      },
      {
        path:"/about",
        element : <About></About>  
      },
      {
        path:"/OurStory",
        element: <OurStory></OurStory>        
      },
      {
        path:"/feedback",
        element: <PrivateRoute><Feedback></Feedback></PrivateRoute>
      },
      {
        path:"/contact",
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
