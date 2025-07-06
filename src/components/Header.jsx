import { motion } from "framer-motion";
import { MdOutlineMenuBook } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold tracking-tight text-rose-500 hover:text-rose-600 transition-colors"
          >
            <MdOutlineMenuBook className="text-2xl" />
            <span>Personal Diary</span>
          </Link>
        </motion.div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 dark:text-gray-100 font-medium">
          {["/entries", "contact"].map((path, index) => (
            <motion.div
              key={path}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={path}
                className="hover:text-rose-500 hover:underline underline-offset-4 transition-all"
              >
                {path === "/entries" ? "Entries" : "Contact"}
              </Link>
            </motion.div>
          ))}

          {/* Add Entry Button */}
          <motion.button
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 0px 8px rgba(244, 63, 94, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full font-semibold shadow-sm transition-transform"
          >
            + New Entry
          </motion.button>
        </nav>
      </div>
    </motion.header>
  );
}
