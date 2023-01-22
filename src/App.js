import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./component/header";
import Body from "./component/body";
import Footer from "./component/footer";
import About from "./component/about";
import Error from "./component/Error";
import {createBrowserRouter, RouterProvider} from "react-router-dom";





const AppLayout = () =>{
    return (
    <>
    <Header />
    <Body />
    <Footer />
    </>
    );
}




const appRoute = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path:"/about",
        element: <About />
    }
]);





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <RouterProvider router={appRoute} /> );