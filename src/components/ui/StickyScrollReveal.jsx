import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../../lib/utils';

export const StickyScrollReveal = ({ content, contentClassName }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="relative">
      <div className="flex justify-start">
        <div className="px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-2xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-kg text-slate-300 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
        <div
          className={cn(
            'hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden',
            contentClassName
          )}
        >
          {content.map((item, index) => {
            const start = index / content.length;
            const end = (index + 1) / content.length;

            const opacity = useTransform(
              scrollYProgress,
              [start, start + 0.1, end - 0.1, end],
              [0, 1, 1, 0]
            );

            const scale = useTransform(
              scrollYProgress,
              [start, start + 0.1, end - 0.1, end],
              [0.8, 1, 1, 0.8]
            );

            return (
              <motion.div
                key={item.title + index}
                style={{ opacity, scale }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {item.content}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
