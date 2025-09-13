import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Sparkles, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Floating heart animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
          className="mb-8"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block"
          >
            <Heart
              className="w-16 h-16 text-pink-400 mx-auto drop-shadow-lg"
              fill="currentColor"
            />
          </motion.div>
        </motion.div>

        {/* Main heading with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading"
          >
            <span className="block gradient-text-love">For My</span>
            <span className="block gradient-text relative">
              Beautiful
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6"
              >
                <Sparkles
                  className="w-8 h-8 md:w-12 md:h-12 text-yellow-400 drop-shadow-lg"
                  fill="currentColor"
                />
              </motion.div>
            </span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="block gradient-text-love"
            >
              Girlfriend
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            A digital love letter crafted with code, filled with memories,
            <br className="hidden md:block" />
            moments, and endless reasons why you're extraordinary
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Story
              <Heart className="w-5 h-5" fill="currentColor" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 glass-morphism text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30"
          >
            <span className="flex items-center gap-2">
              View Memories
              <Sparkles className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-slate-400"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
