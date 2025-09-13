import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const id = Math.random();
      const newHeart = {
        id,
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 2,
        opacity: Math.random() * 0.5 + 0.3,
        size: Math.random() * 10 + 15,
      };

      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== id));
      }, newHeart.animationDuration * 1000);
    };

    const interval = setInterval(createHeart, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
          }}
          animate={{
            y: -window.innerHeight - 100,
            opacity: [heart.opacity, heart.opacity, 0],
          }}
          transition={{
            duration: heart.animationDuration,
            ease: 'easeOut',
          }}
        >
          <div
            className="text-pink-400"
            style={{ fontSize: `${heart.size}px` }}
          >
            💖
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
