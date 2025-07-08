import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import CreateDiaryEntry from "./components/entries/CreateDiaryEntry";
import EntriesPage from "./pages/EntriesPage";
import EntryDetail from "./components/entries/EntryDetail";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import NotFound404 from "./components/NotFound404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound404 />,
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <CreateDiaryEntry /> },
      { path: "entries", element: <EntriesPage /> },
      { path: "entries/:id", element: <EntryDetail /> },
    ],
  },
]);

export default function Router() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider
        router={router}
        location={location}
        key={location.pathname}
      />
    </AnimatePresence>
  );
}
