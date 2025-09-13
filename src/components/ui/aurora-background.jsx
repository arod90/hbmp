import { cn } from '../../lib/utils';

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center text-white transition-bg w-full h-full',
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden w-full h-full">
        {/* Simplified single aurora layer for better performance */}
        <div
          className="absolute inset-0 opacity-60 w-full h-full"
          style={{
            background:
              'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #ff1493, #00ff7f)',
            backgroundSize: '300% 300%',
            animation: 'aurora 25s ease infinite',
            transform: 'translateZ(0)', // Force GPU acceleration
            willChange: 'background-position', // Optimize for animation
            filter: 'blur(30px)', // Reduced blur for better performance
            backfaceVisibility: 'hidden', // Safari optimization
          }}
        />
        {/* Simplified overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-black/15 via-transparent to-black/15 w-full h-full"
          style={{
            transform: 'translateZ(0)',
          }}
        />
      </div>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};
