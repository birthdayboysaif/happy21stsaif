import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function App() {
  useEffect(() => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      });
    }, 250);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#0a192f] to-[#134e4a] text-white min-h-screen p-4 md:p-12 space-y-12 font-sans">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-center text-teal-300 drop-shadow-lg"
      >
        Saif Siam: The King Who Don’t Need a Crown
      </motion.h1>
      <motion.section
        className="bg-[#0f2a3a] rounded-2xl p-6 md:p-10 text-lg md:text-xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-center text-white leading-relaxed">
          “So bro has turned 21, huh? And just look how far you’ve come — not just in years, but in heart.
          This isn’t just a birthday, it’s a reminder that you matter to more people than you know.
          I hope this makes you smile, because you’ve always been someone special. Happy birthday.”
        </p>
      </motion.section>
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src="/462224679_868371772030412_5573151676594333286_n.jpg" alt="Saif Siam 1" className="rounded-2xl shadow-lg object-cover w-full h-full" />
        <img src="/480860636_962387839295471_7841063531714318682_n.jpg" alt="Saif Siam 2" className="rounded-2xl shadow-lg object-cover w-full h-full" />
      </motion.section>
      <motion.section
        className="bg-[#1a3b4c] rounded-2xl p-6 md:p-10 text-md md:text-lg shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-teal-300 mb-4 text-center">Letter to Future Saif</h2>
        <p className="whitespace-pre-line text-white leading-relaxed text-center">
          Dear Future Siam,{"\n"}
          Wherever you are when you read this, I hope you’ve kept that kind heart.
          I hope life is kinder now, and you’ve become the man you dreamed of. But if not, I still want you to remember this:
          you’ve already overcome more than most, and you’ve done it with dignity.
          So don’t stop now. Keep going, keep growing. And smile — because that's what suits you the most.
        </p>
      </motion.section>
    </div>
  );
}
