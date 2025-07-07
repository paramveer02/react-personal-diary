import { useState, Fragment } from "react";
import { motion } from "framer-motion";
import { FaPaperclip, FaCalendarAlt } from "react-icons/fa";
import { Button, Spinner } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
import { fireConfetti } from "../../utils/confetti";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function convertToBase64(file) {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => res(reader.result);
    reader.onerror = (err) => rej(err);
  });
}

export default function CreateDiaryEntry() {
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [content, setContent] = useState("");

  const submitAction = async (e) => {
    e.preventDefault();

    if (content.length < 20) {
      toast.error("Minimum 20 characters required!");
      return;
    }

    if (content.length > 100) {
      toast.error("Maximum limit of 100 characters exceeded!");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const date = formData.get("date") || startDate.toISOString();
    const imageFile = formData.get("image");

    await new Promise((res) => setTimeout(res, 1500));

    // convert image to base64 (for storing in localstorage)
    let imageData = null;
    if (imageFile && imageFile instanceof File) {
      imageData = await convertToBase64(imageFile);
    }

    const newEntry = {
      id: Date.now(),
      title,
      date,
      content,
      image: imageData,
    };

    // get existing entries
    const existing = JSON.parse(localStorage.getItem("diaryEntries")) || [];

    // check if an entry exists already for selected date
    const isDuplicateDate = existing.some((entry) => {
      const savedDate = new Date(entry.date).toDateString();
      const currentDate = new Date(date).toDateString();
      return savedDate === currentDate;
    });

    if (isDuplicateDate) {
      toast("You've already written something for this date 🧘‍♂️", {
        icon: "📖",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setLoading(false);
      return;
    }

    // add new entry
    const updatedEntries = [...existing, newEntry];

    // save to localStorage
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));

    fireConfetti();
    toast.success("Diary entry saved successfully!");
    setLoading(false);

    // reset form
    setContent("");
    e.target.reset();
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/tamas-tuzes-katai-SE5ThMvJHkM-unsplash.jpg')",
        cursor: "url('/cursor-pen.png'), auto",
      }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <motion.form
        onSubmit={submitAction}
        className="bg-white/20 dark:bg-gray-900/30 backdrop-blur-xl rounded-2xl shadow-2xl p-10 w-full max-w-2xl space-y-6 text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-center tracking-tight">
          ✨ Pen Down Your Feelings ✨
        </h2>

        <input
          name="title"
          type="text"
          placeholder="Title..."
          className="w-full border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/60 text-gray-900 dark:text-gray-100 rounded-xl px-5 py-3 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        {/* Floating Calendar Modal */}
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="w-full bg-white/10 border border-purple-500 placeholder-purple-300 text-purple-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
          calendarClassName="rounded-xl shadow-lg bg-white text-gray-800"
          dayClassName={() => "hover:bg-purple-200"}
          dateFormat="dd.MM.yyyy"
          placeholderText="Select Date"
        />

        <textarea
          name="content"
          placeholder="What’s on your mind today?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/60 text-gray-900 dark:text-gray-100 rounded-xl px-5 py-3 h-40 resize-none placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          maxLength={100}
          required
        />
        <p
          className={`${
            content.length < 20
              ? "text-red-400"
              : content.length >= 100
              ? "text-yellow-400"
              : "text-green-400"
          }`}
        >
          characters: {content.length} / 100
        </p>

        {/* Upload Image Button */}
        <div className="space-y-2">
          <label htmlFor="image" className="block text-sm text-gray-200">
            Attach an image (optional)
          </label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            className="hidden"
          />
          <label htmlFor="image">
            <Button
              color="secondary"
              startContent={<FaPaperclip />}
              variant="flat"
              fullWidth
              className="w-full font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-pointer"
            >
              Upload Image
            </Button>
          </label>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          color="primary"
          variant="flat"
          radius="lg"
          isLoading={loading}
          spinner={<Spinner color="white" size="sm" />}
          className="w-full font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-pointer"
        >
          {loading ? "Saving..." : "Save Entry"}
        </Button>
      </motion.form>
    </section>
  );
}
