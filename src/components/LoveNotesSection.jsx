import { motion } from 'framer-motion';
import { Heart, MessageCircle, Star, Sparkles } from 'lucide-react';
import { StickyScrollReveal } from './ui/StickyScrollReveal';

const LoveNotesSection = () => {
  const content = [
    {
      title: 'Every Morning',
      description:
        'Every morning I wake up grateful for another day to love you. Your smile is the sunshine that brightens my entire world, and your laugh is the melody that makes my heart dance.',
      content: (
        <div className="h-full w-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center rounded-lg">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="text-white"
          >
            <Heart className="w-20 h-20" fill="currentColor" />
          </motion.div>
        </div>
      ),
    },
    {
      title: 'Magical Moments',
      description:
        'You have this incredible way of making ordinary moments feel magical. With you, even grocery shopping becomes an adventure, and quiet evenings become treasured memories.',
      content: (
        <div className="h-full w-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center rounded-lg">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white"
          >
            <Sparkles className="w-20 h-20" fill="currentColor" />
          </motion.div>
        </div>
      ),
    },
    {
      title: 'Your Laughter',
      description:
        "Your laugh is my favorite sound in the world. It's pure joy, infectious happiness, and the most beautiful music I've ever heard. I would tell a thousand jokes just to hear it once more.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center rounded-lg">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white"
          >
            <MessageCircle className="w-20 h-20" fill="currentColor" />
          </motion.div>
        </div>
      ),
    },
    {
      title: 'My Best Friend',
      description:
        'Thank you for being my best friend, my partner in crime, my biggest supporter, and the love of my life all rolled into one amazing, extraordinary person.',
      content: (
        <div className="h-full w-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center rounded-lg">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white"
          >
            <Star className="w-20 h-20" fill="currentColor" />
          </motion.div>
        </div>
      ),
    },
    {
      title: 'Inspiration',
      description:
        'You make me want to be the best version of myself. Your love inspires me to reach for the stars, believe in dreams, and never give up on what matters most.',
      content: (
        <div className="h-full w-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center rounded-lg">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white"
          >
            <Heart className="w-20 h-20" fill="currentColor" />
          </motion.div>
        </div>
      ),
    },
    {
      title: 'Forever',
      description:
        'In a world full of temporary things, you are my forever. I choose you today, tomorrow, and for all the days that follow. You are my home, my heart, my everything.',
      content: (
        <div className="h-full w-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center rounded-lg">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              rotate: { duration: 10, repeat: Infinity, ease: 'linear' },
            }}
            className="text-white"
          >
            <Sparkles className="w-20 h-20" fill="currentColor" />
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section header */}
        <div className="container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.h2 className="text-5xl md:text-7xl font-bold font-heading gradient-text-love mb-6">
              Love Notes
              <br />
              Just for You
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              Words from my heart to yours — little reminders of how much you
              mean to me and all the reasons why you make my world complete
            </motion.p>
          </motion.div>
        </div>

        {/* Sticky scroll reveal content */}
        <div className="pb-20">
          <StickyScrollReveal content={content} />
        </div>

        {/* Final message */}
        <div className="container pb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="max-w-4xl mx-auto glass-morphism rounded-3xl p-12">
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <h3 className="text-4xl font-bold gradient-text-love mb-6">
                  You Are My Everything 💖
                </h3>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  This website is just a small token of my love for you. Every
                  day with you is a gift, and I'm so grateful to call you mine.
                  Here's to many more beautiful memories, adventures, and
                  moments of pure happiness together.
                </p>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-6xl"
                >
                  💕
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoveNotesSection;
