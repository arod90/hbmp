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
        <div
          className="absolute inset-0 opacity-90 will-change-transform animate-aurora blur-[60px] w-full h-full"
          style={{
            background:
              'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #ff1493, #00ff7f, #ff6347)',
            backgroundSize: '600% 600%',
            animation: 'aurora 15s ease infinite',
          }}
        />
        <div
          className="absolute inset-0 animate-aurora blur-[80px] w-full h-full"
          style={{
            background:
              'radial-gradient(circle at 30% 70%, #ff69b4 0%, transparent 50%), radial-gradient(circle at 70% 30%, #00ffff 0%, transparent 50%), radial-gradient(circle at 50% 50%, #ffd700 0%, transparent 50%)',
            backgroundSize: '400% 400%',
            animation: 'aurora 25s ease infinite reverse',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30 w-full h-full" />
      </div>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};
