/** @notice Local imports */
import { MonthlyAnalytics } from "./AnalyticsContent";

const chartData = [
  { date: "2025-09-01", visitors: 222 },
  { date: "2025-09-02", visitors: 97 },
  { date: "2025-09-03", visitors: 167 },
  { date: "2025-09-04", visitors: 242 },
  { date: "2025-09-05", visitors: 373 },
  { date: "2025-09-06", visitors: 301 },
  { date: "2025-09-07", visitors: 245 },
  { date: "2025-09-08", visitors: 409 },
  { date: "2025-09-09", visitors: 59 },
  { date: "2025-09-10", visitors: 261 },
  { date: "2025-09-11", visitors: 327 },
  { date: "2025-09-12", visitors: 292 },
  { date: "2025-09-13", visitors: 342 },
  { date: "2025-09-14", visitors: 137 },
  { date: "2025-09-15", visitors: 120 },
  { date: "2025-09-16", visitors: 138 },
  { date: "2025-09-17", visitors: 446 },
  { date: "2025-09-18", visitors: 364 },
  { date: "2025-09-19", visitors: 243 },
  { date: "2025-09-20", visitors: 89 },
  { date: "2025-09-21", visitors: 137 },
  { date: "2025-09-22", visitors: 224 },
  { date: "2025-09-23", visitors: 138 },
  { date: "2025-09-24", visitors: 387 },
  { date: "2025-09-25", visitors: 215 },
  { date: "2025-09-26", visitors: 75 },
  { date: "2025-09-27", visitors: 383 },
  { date: "2025-09-28", visitors: 122 },
  { date: "2025-09-29", visitors: 315 },
  { date: "2025-09-30", visitors: 454 },
];

export const MonthlyAnalyticsWrapper = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <MonthlyAnalytics data={chartData} />;
};
