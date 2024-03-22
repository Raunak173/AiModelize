import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ModelDetails from "../pages/ModelDetails";
import Mine from "../pages/Mine";
import Featured from "../pages/Featured";
import Add from "../pages/Add";
import MyModelDetails from "../pages/MyModelDetails";

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
    path: "/models/mine/:id",
    element: <MyModelDetails />,
  },
  {
    path: "/mine",
    element: <Mine />,
  },
  {
    path: "/featured",
    element: <Featured />,
  },
  {
    path: "/add",
    element: <Add />,
  },
]);
