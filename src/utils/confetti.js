import confetti from "canvas-confetti";

export function fireConfetti() {
  const duration = 2 * 1000;
  const animationEnd = Date.now() + duration;

  const pastelStars = ["#ffffff", "#d1d5db", "#e0f2fe", "#f3e8ff", "#fef9c3"];

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    confetti({
      particleCount: 8,
      startVelocity: 2,
      spread: 30,
      gravity: 0.15,
      ticks: 200,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.4 + 0.2, // mid-top area
      },
      colors: pastelStars,
      scalar: 0.5,
      shapes: ["circle"], // use circle to mimic stars
    });
  }, 250);
}
