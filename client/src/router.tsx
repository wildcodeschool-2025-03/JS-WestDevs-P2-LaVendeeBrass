import { createBrowserRouter } from "react-router";
import App from "./App";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import ReservationPage from "./pages/ReservationPage/ReservationPage";

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
      {
        element: <ReservationPage />,
        path: "/ReservationPage",
      },
      {
        element: <AboutPage />,
        path: "/AboutPage",
      },
    ],
  },
]);

export default router;
