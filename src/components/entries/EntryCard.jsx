import { motion } from "framer-motion";

export default function EntryCard({ entry }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        rotate: 0.5,
        transition: { type: "spring", stiffness: 300 },
      }}
    >
      {entry.image && (
        <img
          src={entry.image}
          alt={entry.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-5 text-left">
        <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">
          <span className="text-purple-200 tracking-tight">{entry.title}</span>
        </h3>

        <p className="text-sm text-gray-300">
          {new Date(entry.date).toDateString()}
        </p>
      </div>
    </motion.div>
  );
}
