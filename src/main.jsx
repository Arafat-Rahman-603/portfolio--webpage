import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
    {
    path: "/Home",
    element: <App />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
