import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true); // Default to dark mode

  const toggleTheme = () => {
    setIsDark(!isDark);
    // ⚠️ We'll hook up real theme switching later
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="text-white dark:text-yellow-400 text-xl p-2 rounded-full"
      whileTap={{ scale: 0.9, rotate: 20 }}
      whileHover={{ scale: 1.2 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            <FiMoon size={22} className="drop-shadow-md" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.3 }}
          >
            <FiSun size={22} className="drop-shadow-md text-yellow-300" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
