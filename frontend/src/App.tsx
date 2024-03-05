import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/shared/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: '#2f27ce',
    },
    secondary: {
      main: "#DEDCFF",
    },

  },
});


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>TuneToss</h1>
          <Link to="about">Home</Link>
        </div>
      ),
    },
    {
      path: "about",
      element: (
        <div>
          <h1>TuneToss</h1>
          <Link to="about">About Us</Link>
        </div>
      ),
    },
  ]);

  return (
    <div className="App">
      <Navbar/>
      <RouterProvider router={router} />
      <div></div>
    </div>
  );
}

export default App;
