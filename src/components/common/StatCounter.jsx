import { useState, useEffect, useRef } from 'react';

export default function StatCounter({
  end,
  suffix = '',
  prefix = '',
  label,
  duration = 2000,
  className = '',
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="font-display font-bold text-4xl md:text-5xl text-black">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm text-medium-gray mt-1 font-sans">{label}</div>
    </div>
  );
}
