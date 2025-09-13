import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '../../lib/utils';

export const DraggableCardContainer = ({ children, className }) => {
  return (
    <div className={cn('relative flex items-center justify-center', className)}>
      {children}
    </div>
  );
};

export const DraggableCardBody = ({
  children,
  className,
  rotate = 10,
  scale = 1.05,
  onRemove,
  ...props
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

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

  const handleDragEnd = (event, info) => {
    const threshold = 300; // Increased threshold
    const velocity = Math.abs(info.velocity.x) + Math.abs(info.velocity.y);
    const distance = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2);

    // Only remove if BOTH distance AND velocity are high (intentional swipe)
    if (distance > threshold && velocity > 1000) {
      // Smooth slide out animation
      setIsVisible(false);
      if (onRemove) {
        setTimeout(() => onRemove(), 500);
      }
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
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
        dragElastic={0.1}
        dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 1, scale: 1 }}
        exit={{
          opacity: 0,
          scale: 0.6,
          rotateZ: Math.random() * 45 - 22.5,
          x: Math.random() * 400 - 200,
          y: Math.random() * 400 - 200,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        }}
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
    </AnimatePresence>
  );
};
