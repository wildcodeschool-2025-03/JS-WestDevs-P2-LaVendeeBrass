import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
      {
        element: <MenuPage />,
        path: "/MenuPage",
      },
    ],
  },
]);

export default router;
