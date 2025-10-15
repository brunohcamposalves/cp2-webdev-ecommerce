import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ],
  },
]);