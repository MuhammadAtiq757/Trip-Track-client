
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

import Error from "../Pages/Error/Error";
import Tour from "../Pages/Tour/Tour";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Services from "../Pages/Services/Services";




export const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            errorElement: <Error></Error>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
              
              {
                path :'/tour',
                element: <Tour></Tour>
              },
              {
                path: '/about',
                element: <AboutUs></AboutUs>,
               
              },
              {
                path: '/services',
                element: <Services></Services>,
               
              }
             
             
             
            

           
            ]
            
        }


    ]);
