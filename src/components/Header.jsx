import { motion } from "framer-motion";
import { MdOutlineMenuBook } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 z-50 flex justify-center w-full bg-transparent"
    >
      <div className="max-w-5xl w-full mx-auto px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl shadow-lg flex justify-between items-center">
        {/* LOGO */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold tracking-tight text-white hover:text-purple-300 transition-colors"
          >
            <MdOutlineMenuBook className="text-2xl" />
            <span>Personal Diary</span>
          </Link>
        </motion.div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          {["/entries", "contact"].map((path) => (
            <motion.div
              key={path}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={path}
                className="text-white hover:text-purple-300 hover:underline underline-offset-4 transition-colors"
              >
                {path === "/entries" ? "Entries" : "Contact"}
              </Link>
            </motion.div>
          ))}

          <Button
            as={Link}
            to="/create"
            color="secondary"
            variant="solid"
            radius="full"
            size="sm"
            className="px-4 py-2 font-medium bg-white/20 text-white shadow-md backdrop-blur-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:text-purple-300"
          >
            + New Entry
          </Button>
        </nav>
      </div>
    </motion.header>
  );
}
