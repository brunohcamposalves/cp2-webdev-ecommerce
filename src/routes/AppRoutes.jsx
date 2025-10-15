import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../components/RootLayout";
import Profile from "../pages/Profile";
import ShoppingCart from "../pages/ShoppingCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/perfil",
        element: <Profile />
      },
      {
        path: "/carrinho",
        element: <ShoppingCart />
      },
      
    ],
  },
]);