import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const GlassCard = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      className={cn(
        'glass-effect rounded-2xl p-6 shadow-xl',
        hover && 'hover:shadow-2xl transition-all duration-300',
        className
      )}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
