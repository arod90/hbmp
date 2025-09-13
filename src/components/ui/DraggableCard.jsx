import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../../lib/utils';

export const DraggableCardContainer = ({ children, className }) => {
  return (
    <div className={cn('relative flex items-center justify-center', className)}>
      {children}
    </div>
  );
};

export const DraggableCard = ({
  children,
  className,
  rotate = 10,
  scale = 1.05,
  ...props
}) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${rotate}deg`, `-${rotate}deg`]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${rotate}deg`, `${rotate}deg`]
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale }}
      drag
      dragElastic={0.16}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      className={cn('relative cursor-grab active:cursor-grabbing', className)}
      {...props}
    >
      <div
        style={{
          transform: 'translateZ(75px)',
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};
