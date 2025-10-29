/** @notice Local imports */
import AnalyticsContent from "./AreaAnalyticsContent";

const chartData = [
  { date: "2025-09-01", records: { clicks: 222 } },
  { date: "2025-09-02", records: { clicks: 97 } },
  { date: "2025-09-03", records: { clicks: 167 } },
  { date: "2025-09-04", records: { clicks: 242 } },
  { date: "2025-09-05", records: { clicks: 373 } },
  { date: "2025-09-06", records: { clicks: 301 } },
  { date: "2025-09-07", records: { clicks: 245 } },
  { date: "2025-09-08", records: { clicks: 409 } },
  { date: "2025-09-09", records: { clicks: 59 } },
  { date: "2025-09-10", records: { clicks: 261 } },
  { date: "2025-09-11", records: { clicks: 327 } },
  { date: "2025-09-12", records: { clicks: 292 } },
  { date: "2025-09-13", records: { clicks: 342 } },
  { date: "2025-09-14", records: { clicks: 137 } },
  { date: "2025-09-15", records: { clicks: 120 } },
  { date: "2025-09-16", records: { clicks: 138 } },
  { date: "2025-09-17", records: { clicks: 446 } },
  { date: "2025-09-18", records: { clicks: 364 } },
  { date: "2025-09-19", records: { clicks: 243 } },
  { date: "2025-09-20", records: { clicks: 89 } },
  { date: "2025-09-21", records: { clicks: 137 } },
  { date: "2025-09-22", records: { clicks: 224 } },
  { date: "2025-09-23", records: { clicks: 138 } },
  { date: "2025-09-24", records: { clicks: 387 } },
  { date: "2025-09-25", records: { clicks: 215 } },
  { date: "2025-09-26", records: { clicks: 75 } },
  { date: "2025-09-27", records: { clicks: 383 } },
  { date: "2025-09-28", records: { clicks: 122 } },
  { date: "2025-09-29", records: { clicks: 315 } },
  { date: "2025-09-30", records: { clicks: 454 } },
];

const ClicksAnalytics = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <AnalyticsContent data={chartData} removeBorder />;
};

export default ClicksAnalytics;
