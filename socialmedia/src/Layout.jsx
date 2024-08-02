import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer"
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
export default function Layout(){
return(
    <div>
       <Header/>
       <Outlet/>
       <Footer/>
    </div>
)


}