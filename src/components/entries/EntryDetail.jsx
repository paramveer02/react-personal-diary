import { useParams } from "react-router-dom";
import { entries } from "../../dummyData/entriesData";
import { useNavigate } from "react-router-dom";

export default function EntryDetail() {
  const navigate = useNavigate();

  const { id } = useParams();

  const entry = entries.find((entry) => entry.id === +id);

  if (!entry)
    return <p className="text-center text-red-500">Entry not found</p>;

  return (
    <div className="min-h-screen w-full bg-[url('/tamas-tuzes-katai-SE5ThMvJHkM-unsplash.jpg')] bg-cover bg-center bg-no-repeat px-8 pt-44 text-gray-100 space-y-6">
      <h1 className="text-4xl font-bold text-gray-400 font-bold">
        {entry.title}
      </h1>
      <p className="text-gray-400">{entry.date}</p>
      <img
        src={`/${entry.image}`}
        alt={entry.title}
        className="rounded-xl shadow-lg w-full max-h-[400px] object-cover"
      />
      <p className="text-lg">{entry.content}</p>
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
      >
        ← Go Back
      </button>
    </div>
  );
}
