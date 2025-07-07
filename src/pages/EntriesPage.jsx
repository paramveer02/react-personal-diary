import { useState } from "react";
import EntryCard from "../components/entries/EntryCard";
import { entries } from "../dummyData/entriesData";
import Button from "../components/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function EntriesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState("next");

  //   const allEntries = JSON.parse(localStorage.getItem("entries")) || [];
  const allEntries = entries;
  let entriesPerPage = 3;

  const indexOfLast = entriesPerPage * currentPage;
  const indexOfFirst = indexOfLast - entriesPerPage;
  const currentEntries = allEntries.slice(indexOfFirst, indexOfLast);

  function handleClickPagination(to) {
    if (to === "next" && indexOfLast < allEntries.length) {
      setDirection("next");
      setCurrentPage((prev) => prev + 1);
    } else if (to === "previous" && currentPage > 1) {
      setDirection("previous");
      setCurrentPage((prev) => prev - 1);
    }
  }

  return (
    <section
      className="min-h-screen bg-cover bg-center text-white px-6 pt-28 pb-20"
      style={{
        backgroundImage: "url('/tamas-tuzes-katai-SE5ThMvJHkM-unsplash.jpg')",
      }}
    >
      <div className="max-w-6xl mx-auto text-center backdrop-blur-md bg-white/10 dark:bg-gray-900/20 p-10 rounded-xl shadow-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-purple-200 tracking-tight">
          📖 Your Diary Collection
        </h2>
        <p className="text-lg text-gray-200 mb-12">
          Reflect, revisit, and relive your thoughts.
        </p>

        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ x: direction === "next" ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === "next" ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
            >
              {currentEntries
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((entry) => (
                  <EntryCard key={entry.id} entry={entry} />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <Button
            to="previous"
            onClick={handleClickPagination}
            disabled={currentPage === 1}
          />
          <Button
            to="next"
            onClick={handleClickPagination}
            disabled={indexOfLast >= allEntries.length}
          />
        </div>

        <div className="mt-4 text-purple-200">
          Page {currentPage} of {Math.ceil(allEntries.length / entriesPerPage)}
        </div>
      </div>
    </section>
  );
}
