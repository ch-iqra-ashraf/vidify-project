import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Subcription from "./components/Subscription/Subcription";
import GenerateAIVideopg2 from "./pages/GenerateAIVideopg2.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./Layout.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "apps/vidify",
          element: <Home />,
        },
        {
          path: "apps/vidify/generate-video",
          element: <GenerateAIVideopg2 />,
        },
        {
          path: "apps/vidify/subscription-plan",
          element: <Subcription />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
