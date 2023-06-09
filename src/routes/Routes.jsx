 /* eslint-disable no-unused-vars */
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/shared/Terms/Terms";

const router = createBrowserRouter([
    {

        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element:<Navigate to="/catagory/0"></Navigate>
            },
         {
            path:'login',
            element:<Login></Login>

         },
         {
            path:'terms',
            element:<Terms></Terms>
         },
         {
            path:'register',
            element:<Register></Register>

         },
        ]
    },
    {
        path:'catagory',
        element:<Main></Main>,
        children:[
        
            {
                path:':id',
                element:<Category></Category>,
                loader:({params}) => fetch(`https://the-news-dragon-server-chowdhuryjoyanti.vercel.app/catagories/${params.id}`)
            },
            
            {
              
            },
            
        ]

    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params}) => fetch(`https://the-news-dragon-server-chowdhuryjoyanti.vercel.app/news/${params.id}`)

            }

        ]
       
    }

])
export default router;