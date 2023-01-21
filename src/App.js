import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./component/header";
import Body from "./component/body";
import Footer from "./component/footer";





const AppLayout = () =>{
    return (
    <>
    <Header />
    <Body />
    <Footer />
    </>
    );
}











const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <AppLayout /> );