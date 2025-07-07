import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@nextui-org/react";

export default function Hero() {
  return (
    <section className="relative bg-black dark:bg-gray-900 overflow-hidden min-h-screen flex items-center">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      >
        <source src="/Diary-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-10 w-full">
        {/* Left: Hero Text */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            <TypeAnimation
              sequence={[
                "Capture your day.",
                2000,
                "Write your thoughts.",
                2000,
                "Preserve your memories.",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </h1>
          <p className="text-lg text-gray-300 max-w-md mx-auto md:mx-0">
            Reflect, record, and relive the moments that matter.{" "}
            <span className=" text-purple-400">
              Your story deserves to be written.
            </span>
          </p>
          <Button
            as={Link}
            to="/create"
            color="primary"
            variant="solid"
            radius="lg"
            size="lg"
            className="px-6 py-3 font-semibold bg-white/20 text-white shadow-md backdrop-blur-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:text-purple-200"
          >
            Create Today's Entry
          </Button>
        </div>

        {/* Right: Optional Placeholder for balance or illustration */}
        <div className="hidden md:block md:w-1/2" />
      </div>
    </section>
  );
}
