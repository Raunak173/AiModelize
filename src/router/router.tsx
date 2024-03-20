import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ModelDetails from "../pages/ModelDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/models/:id",
    element: <ModelDetails />,
  },
]);
