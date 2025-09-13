import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  useVelocity,
  useAnimationControls,
  animate,
} from 'framer-motion';
import { useRef, useState, useEffect, memo, useCallback } from 'react';
import { cn } from '../../lib/utils';

export const DraggableCardContainer = memo(({ children, className }) => {
  return (
    <div
      className={cn(
        'relative flex items-center justify-center',
        '[perspective:3000px]',
        className
      )}
    >
      {children}
    </div>
  );
});

export const DraggableCardBody = ({
  children,
  className,
  onRemove,
  ...props
}) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimationControls();
  const [constraints, setConstraints] = useState({
    top: -200,
    left: -200,
    right: 200,
    bottom: 200,
  });

  // Physics-based motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Velocity tracking for physics
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  // Improved spring configuration
  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  // More refined transforms with physics
  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [25, -25]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-25, 25]),
    springConfig
  );

  // Opacity effect when dragging
  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]),
    springConfig
  );

  // Glare effect that follows mouse
  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]),
    springConfig
  );

  useEffect(() => {
    const updateConstraints = () => {
      if (typeof window !== 'undefined') {
        setConstraints({
          top: -window.innerHeight / 3,
          left: -window.innerWidth / 3,
          right: window.innerWidth / 3,
          bottom: window.innerHeight / 3,
        });
      }
    };

    updateConstraints();
    // Use passive event listener for better performance
    window.addEventListener('resize', updateConstraints, { passive: true });
    return () => window.removeEventListener('resize', updateConstraints);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    mouseX.set(deltaX);
    mouseY.set(deltaY);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const handleDragStart = () => {
    document.body.style.cursor = 'grabbing';
  };

  const handleDragEnd = (event, info) => {
    document.body.style.cursor = 'default';

    // Reset rotation with spring animation
    controls.start({
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: 'spring',
        ...springConfig,
      },
    });

    // Get current velocity for physics-based momentum
    const currentVelocityX = velocityX.get();
    const currentVelocityY = velocityY.get();

    const velocityMagnitude = Math.sqrt(
      currentVelocityX * currentVelocityX + currentVelocityY * currentVelocityY
    );

    // Check if should be removed (high velocity swipe)
    const threshold = 1500; // Velocity threshold for removal
    if (velocityMagnitude > threshold) {
      setIsVisible(false);
      if (onRemove) {
        setTimeout(() => onRemove(), 300);
      }
      return;
    }

    // Physics-based bounce back animation
    const bounce = Math.min(0.8, velocityMagnitude / 1000);

    animate(info.point.x, info.point.x + currentVelocityX * 0.3, {
      duration: 0.8,
      ease: [0.2, 0, 0, 1],
      bounce,
      type: 'spring',
      stiffness: 50,
      damping: 15,
      mass: 0.8,
    });

    animate(info.point.y, info.point.y + currentVelocityY * 0.3, {
      duration: 0.8,
      ease: [0.2, 0, 0, 1],
      bounce,
      type: 'spring',
      stiffness: 50,
      damping: 15,
      mass: 0.8,
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={cardRef}
          drag
          dragConstraints={constraints}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{
            rotateX,
            rotateY,
            opacity,
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            WebkitTransformStyle: 'preserve-3d',
          }}
          animate={controls}
          whileHover={{ scale: 1.02 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 0.6,
            rotateZ: Math.random() * 45 - 22.5,
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
            transition: {
              duration: 0.3,
              ease: 'easeOut',
            },
          }}
          className={cn(
            'relative cursor-grab active:cursor-grabbing transform-gpu',
            className
          )}
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

          {/* Glare effect */}
          <motion.div
            style={{
              opacity: glareOpacity,
            }}
            className="pointer-events-none absolute inset-0 bg-white select-none rounded-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
