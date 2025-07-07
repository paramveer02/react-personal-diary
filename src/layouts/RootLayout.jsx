import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-black dark:bg-gray-900">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
