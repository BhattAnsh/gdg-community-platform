import React from "react";
import "./CircleChart.css";

// Define types for chart data
interface ChartData {
  value: number;
  label: string;
}

interface CircleChartProps {
  data: ChartData[];
}

const colorPalette = [
  "#F25F34", "#F2A104", "#F2C14E", "#75B79E", "#5FAD56", 
  "#407088", "#576CA8", "#9A94BC", "#8E8D8A"
];

const getColor = (index: number) => colorPalette[index % colorPalette.length];

const CircleChart: React.FC<CircleChartProps> = ({ data }) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="chart-container flex flex-row gap-7">
      <svg viewBox="0 0 36 36" className="circular-chart">
        {data.map((item, index) => {
          const startAngle = data
            .slice(0, index)
            .reduce((acc, item) => acc + (item.value / total) * 360, 0);

          const percentage = (item.value / total) * 100;
          const strokeDasharray = `${percentage - 5} ${110 - percentage}`;

          return (
            <circle
              key={index}
              className="circle"
              cx={18}
              cy={18}
              r={15.915}
              stroke={getColor(index)}
              strokeDasharray={strokeDasharray}
              transform={`rotate(${startAngle} 18 18)`}
            />
          );
        })}
        {/* Centered Text inside the Circular Chart */}
        <text
          x="18"
          y="18"
          textAnchor="middle"
          dominantBaseline="middle"
          className="chart-center-text"
          transform="rotate(90 18 18)"
        >
          Languages
        </text>
        <text
          x="18"
          y="22"
          textAnchor="middle"
          dominantBaseline="middle"
          className="chart-center-text"
          transform="rotate(90 18 18)"
        >
          Used
        </text>
      </svg>
      <div className="legend">
        {data.map((item, index) => (
          <div key={index} className="legend-item">
            <span
              className="legend-color"
              style={{ backgroundColor: getColor(index) }}
            ></span>
            <span className="legend-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleChart;