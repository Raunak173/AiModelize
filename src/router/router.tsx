import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ModelDetails from "../pages/ModelDetails";
import Mine from "../pages/Mine";
import Featured from "../pages/Featured";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/models/:id",
    element: <ModelDetails />,
  },
  {
    path: "/mine",
    element: <Mine />,
  },
  {
    path: "/featured",
    element: <Featured />,
  },
]);
