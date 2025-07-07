export default function Button({ to, onClick, disabled }) {
  const baseStyles = `px-6 py-2 rounded-full text-white font-semibold transition-all duration-300`;
  const activeStyles = `bg-purple-400 hover:bg-purple-700 shadow-md hover:shadow-lg cursor-pointer`;
  const disabledStyles = `bg-gray-500 cursor-not-allowed opacity-50`;

  return (
    <button
      onClick={() => onClick(to)}
      disabled={disabled}
      className={`${baseStyles} ${disabled ? disabledStyles : activeStyles}`}
    >
      {to === "next" ? "Next →" : "← Previous"}
    </button>
  );
}
