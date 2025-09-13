import { motion } from 'framer-motion';
import { Heart, MessageCircle, Star } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import ParallaxSection from './ui/ParallaxSection';
import { fadeInUp, staggerContainer } from '../lib/utils';

const LoveNotes = () => {
  const notes = [
    {
      id: 1,
      message:
        'Every morning I wake up grateful for another day to love you. Your smile is the sunshine that brightens my entire world.',
      icon: <Heart className="w-6 h-6" fill="currentColor" />,
      color: 'from-pink-400 to-rose-500',
    },
    {
      id: 2,
      message:
        'You have this incredible way of making ordinary moments feel magical. With you, even grocery shopping becomes an adventure.',
      icon: <Star className="w-6 h-6" fill="currentColor" />,
      color: 'from-purple-400 to-indigo-500',
    },
    {
      id: 3,
      message:
        'Your laugh is my favorite sound in the world. I would tell a thousand jokes just to hear it once more.',
      icon: <MessageCircle className="w-6 h-6" fill="currentColor" />,
      color: 'from-blue-400 to-cyan-500',
    },
    {
      id: 4,
      message:
        'Thank you for being my best friend, my partner in crime, and the love of my life all rolled into one amazing person.',
      icon: <Heart className="w-6 h-6" fill="currentColor" />,
      color: 'from-emerald-400 to-teal-500',
    },
    {
      id: 5,
      message:
        'You make me want to be the best version of myself. Your love inspires me to reach for the stars and believe in dreams.',
      icon: <Star className="w-6 h-6" fill="currentColor" />,
      color: 'from-yellow-400 to-orange-500',
    },
    {
      id: 6,
      message:
        'In a world full of temporary things, you are my forever. I choose you today, tomorrow, and for all the days that follow.',
      icon: <MessageCircle className="w-6 h-6" fill="currentColor" />,
      color: 'from-red-400 to-pink-500',
    },
  ];

  return (
    <ParallaxSection className="py-20 bg-gradient-to-b from-pink-50 to-purple-100">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold gradient-text mb-6"
          >
            Love Notes Just for You
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-700 max-w-2xl mx-auto"
          >
            Words from my heart to yours - little reminders of how much you mean
            to me
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {notes.map((note, index) => (
            <motion.div
              key={note.id}
              variants={fadeInUp}
              whileHover={{ y: -5, rotate: Math.random() * 4 - 2 }}
              className="h-full"
            >
              <GlassCard className="h-full flex flex-col relative overflow-hidden group">
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${note.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${note.color} text-white flex items-center justify-center mb-4 relative z-10`}
                >
                  {note.icon}
                </div>

                {/* Message */}
                <p className="text-gray-700 leading-relaxed flex-grow relative z-10 text-lg">
                  "{note.message}"
                </p>

                {/* Decorative hearts */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    💕
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Special message at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <GlassCard className="max-w-2xl mx-auto">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                You Are My Everything 💖
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                This website is just a small token of my love for you. Every day
                with you is a gift, and I'm so grateful to call you mine. Here's
                to many more beautiful memories together!
              </p>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>
    </ParallaxSection>
  );
};

export default LoveNotes;
