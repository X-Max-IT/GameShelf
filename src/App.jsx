import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { homeLoader } from "./loaders/homeLoader";

import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
import Library from "./pages/Library";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";
import { Layout } from "./components/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home />, loader: homeLoader },
      { path: "catalog", element: <Catalog /> },
      { path: "game/:gameId", element: <GameDetails /> },
      { path: "library", element: <Library /> },
    ],
  },

  { path: "registration", element: <Registration /> },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
