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
          className="absolute inset-0 opacity-70 will-change-transform bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-aurora blur-[40px] w-full h-full"
          style={{
            backgroundSize: '400% 400%',
            animation: 'aurora 20s ease infinite',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-zinc-800/30 to-zinc-900/50 w-full h-full" />
      </div>
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};