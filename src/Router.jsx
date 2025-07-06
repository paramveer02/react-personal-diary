import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ContactPage from "./pages/ContactPage";
import EntriesPage from "./pages/EntriesPage";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <ContactPage /> },
      { path: "entries", element: <EntriesPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
