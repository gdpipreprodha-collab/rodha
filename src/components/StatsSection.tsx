import React, { useEffect, useState } from 'react';

const StatBox = ({ target, label, orange }: { target: number, label: React.ReactNode, orange?: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 3500; // slower: 2.5 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * target);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target]);

  return (
    <div className="text-center sm:pb-0 pb-8">
      <h2 className={`text-[48px] font-bold leading-none ${orange ? 'text-[#ff6a00]' : 'text-white'}`}>
        {count}+
      </h2>
      <p className="text-[16px] mt-2" dangerouslySetInnerHTML={{ __html: label as string }} />
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="bg-[#1c1c1c] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-600">
        <StatBox
          target={60}
          label={"Students with 99.50+<br />Percentile in CAT 2025"}
          orange
        />
        <StatBox
          target={20}
          label={"Students with 99.75+<br />Percentile in SNAP 2025"}
        />
        <StatBox
          target={150}
          label={"BLACKI Converts<br />in 2025"}
          orange
        />
        <StatBox
          target={180}
          label={"Converts in BLACKI, XLRI,<br />SPJAIN in 2025"}
        />
      </div>
    </div>
  );
};

export default StatsSection;
