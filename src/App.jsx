import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
// ✅ Layout Component - Navbar baar-baar likhne ki zaroorat nahi
const Layout = () => (
  <div>
    <Navbar />
    <Outlet /> {/* Yeh render karega respective route ka content */}
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // ✅ Navbar yaha ek baar hi add hoga
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
