import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { Heart, Sparkles, Gift } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const InteractiveSection = () => {
  const [hearts, setHearts] = useState([]);
  const [currentMessage, setCurrentMessage] = useState(0);
  const constraintsRef = useRef(null);

  const messages = [
    'You make every day brighter! ☀️',
    'Your smile is my favorite view 😊',
    "Together we're unstoppable! 💪",
    "You're my happy place 🏡",
    'Forever grateful for you 🙏',
  ];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const createHeart = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const newHeart = {
      id: Date.now() + Math.random(),
      x,
      y,
    };

    setHearts((prev) => [...prev, newHeart]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
    }, 2000);
  };

  const nextMessage = () => {
    setCurrentMessage((prev) => (prev + 1) % messages.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-100 to-indigo-200 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Interactive Love Zone
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Tap, swipe, and interact with these elements made just for you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Heart Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <GlassCard className="relative overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Tap for Hearts! 💕
              </h3>
              <div
                className="relative w-40 h-40 mx-auto cursor-pointer"
                onClick={createHeart}
              >
                <motion.div
                  className="w-full h-full bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white text-4xl shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(236, 72, 153, 0.3)',
                      '0 0 40px rgba(236, 72, 153, 0.6)',
                      '0 0 20px rgba(236, 72, 153, 0.3)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart fill="currentColor" />
                </motion.div>

                {/* Flying hearts */}
                {hearts.map((heart) => (
                  <motion.div
                    key={heart.id}
                    className="absolute text-2xl pointer-events-none"
                    style={{ left: heart.x, top: heart.y }}
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{
                      scale: [0, 1, 0],
                      y: -100,
                      opacity: [1, 1, 0],
                    }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                  >
                    💖
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-600 mt-4">
                Each tap sends love your way!
              </p>
            </GlassCard>
          </motion.div>

          {/* 3D Tilt Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div ref={constraintsRef} className="perspective-1000">
              <motion.div
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={constraintsRef}
                whileTap={{ cursor: 'grabbing' }}
                className="cursor-grab"
              >
                <GlassCard className="w-80 h-80 mx-auto flex flex-col items-center justify-center bg-gradient-to-br from-purple-400/20 to-pink-400/20">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Sparkles
                      className="w-16 h-16 text-yellow-400 mb-4"
                      fill="currentColor"
                    />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Drag Me Around!
                  </h3>
                  <p className="text-gray-600 text-center px-4">
                    This card follows your touch - just like how I follow my
                    heart to you 💕
                  </p>
                </GlassCard>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Message Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <GlassCard className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-4">
              <Gift className="w-6 h-6 text-purple-500" />
              <h3 className="text-xl font-bold text-gray-800">
                Daily Love Messages
              </h3>
              <Gift className="w-6 h-6 text-purple-500" />
            </div>

            <motion.div
              key={currentMessage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="mb-6"
            >
              <p className="text-lg text-gray-700 font-medium">
                {messages[currentMessage]}
              </p>
            </motion.div>

            <motion.button
              onClick={nextMessage}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next Message 💌
            </motion.button>

            <div className="flex justify-center mt-4 space-x-2">
              {messages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentMessage ? 'bg-purple-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveSection;
