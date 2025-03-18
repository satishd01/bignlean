import { useEffect } from "react";

interface HeightSliderProps {
  value: number;
  onHeightChange: (value: number) => void;
}

export default function HeightSlider({ value, onHeightChange }: HeightSliderProps) {
  const min = 0;    // Full range minimum
  const max = 250;  // Full range maximum
  const displayRange = 30; // Visible range (e.g., 180 - 150 = 30)
  const step = 1;

  const getVisibleRange = () => {
    let start: number;
    let end: number;

    // Initial range is 150–180
    if (value >= 150 && value <= 180 && Math.abs(value - 165) <= 15) {
      start = 150;
      end = 180;
    } else {
      // Calculate dynamic range based on current value
      const halfRange = Math.floor(displayRange / 2);
      start = Math.max(min, value - halfRange);
      end = Math.min(max, value + halfRange);

      // Adjust if the range is smaller than displayRange
      if (end - start < displayRange) {
        if (start === min) end = min + displayRange;
        else if (end === max) start = max - displayRange;
      }

      // Snap to 5-unit intervals
      start = Math.floor(start / 5) * 5;
      end = Math.ceil(end / 5) * 5;
    }

    return { start, end };
  };

  const { start, end } = getVisibleRange();
  const scaleNumbers = Array.from(
    { length: Math.floor((end - start) / 5) + 1 },
    (_, i) => start + i * 5
  );
  const allTicks = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    onHeightChange(newValue);
  };

  useEffect(() => {
    if (value < min) onHeightChange(min);
    if (value > max) onHeightChange(max);
  }, [value, onHeightChange, min, max]);

  return (
    <div className="flex flex-col items-center w-full max-w-[265px] ml-4">
      <div className="relative w-full px-4">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className="w-full appearance-none h-1 bg-none rounded outline-none"
          style={{
            WebkitAppearance: "none",
            background: "transparent",
            position: "relative",
            zIndex: 10,
          }}
        />
        
        <style
          dangerouslySetInnerHTML={{
            __html: `
              input[type='range']::-webkit-slider-thumb {
                -webkit-appearance: none;
                width: 0;
                height: 0;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 12px solid red;
                transform: translateY(-6px) translateX(-50%);
              }
              input[type='range']::-moz-range-thumb {
                width: 0;
                height: 0;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 12px solid red;
                transform: translateX(-50%);
              }
            `,
          }}
        />

        <div className="relative w-full h-6 mt-[-6px] flex items-end">
          {allTicks.map((num) => (
            <div
              key={num}
              className={`absolute bottom-0 border-l ${
                (num - start) % 5 === 0 ? "border-red-500 h-4 w-1" : "border-red-300 h-2 w-0.5"
              }`}
              style={{
                left: `${((num - start) / (end - start)) * 100}%`,
                transform: "translateX(-50%)",
              }}
            />
          ))}
        </div>

        <div className="flex justify-between mt-1 text-red-500 text-sm">
          {scaleNumbers.map((num) => (
            <span key={num}>{num}</span>
          ))}
        </div>
      </div>

      <div className="mt-4 text-lg font-semibold text-red-500">{value} cm</div>
    </div>
  );
}