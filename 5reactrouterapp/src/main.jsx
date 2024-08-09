import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contacts/Contacts.jsx";
import User from "./components/User/User.jsx";
import { Route } from "react-router-dom";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children:[
//       {path:"",
//       element:<Home/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contact-us',
//         element:<Contact/>
//       }
//     ]
//    //link must be defined in header and footer to let this thing work out see layout.jsx before proceeding
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="user" element={<User />} />
      <Route path="user/:userid" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
