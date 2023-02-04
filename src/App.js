import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./component/header";
import Body from "./component/body";
import Footer from "./component/footer";
import About from "./component/about";
import Error from "./component/Error";
import Contact from "./component/contact";
import RestrauntMenu from "./component/RestrauntMenu";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";





const AppLayout = () =>{
    return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
    );
}




const appRoute = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/con",
                element: <Contact />
            },
            {
                path:"/res/:id",
                element: <RestrauntMenu />
            }
        ]
    }
]);





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <RouterProvider router={appRoute} /> );