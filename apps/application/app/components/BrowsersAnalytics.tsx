/** @notice Local imports */
import AnalyticsContent from "./AreaAnalyticsContent";

const chartData = [
  {
    date: "2024-04-01",
    records: {
      chrome: 342,
      safari: 189,
      firefox: 76,
      edge: 134,
      opera: 45,
      brave: 23,
    },
  },
  {
    date: "2024-04-02",
    records: {
      chrome: 389,
      safari: 156,
      firefox: 98,
      edge: 87,
      opera: 67,
      brave: 34,
    },
  },
  {
    date: "2024-04-03",
    records: {
      chrome: 267,
      safari: 234,
      firefox: 123,
      edge: 156,
      opera: 34,
      brave: 56,
    },
  },
  {
    date: "2024-04-04",
    records: {
      chrome: 456,
      safari: 178,
      firefox: 89,
      edge: 198,
      opera: 78,
      brave: 45,
    },
  },
  {
    date: "2024-04-05",
    records: {
      chrome: 298,
      safari: 267,
      firefox: 134,
      edge: 89,
      opera: 56,
      brave: 67,
    },
  },
  {
    date: "2024-04-06",
    records: {
      chrome: 378,
      safari: 198,
      firefox: 156,
      edge: 234,
      opera: 45,
      brave: 78,
    },
  },
  {
    date: "2024-04-07",
    records: {
      chrome: 234,
      safari: 289,
      firefox: 87,
      edge: 167,
      opera: 89,
      brave: 34,
    },
  },
  {
    date: "2024-04-08",
    records: {
      chrome: 445,
      safari: 134,
      firefox: 198,
      edge: 123,
      opera: 67,
      brave: 56,
    },
  },
  {
    date: "2024-04-09",
    records: {
      chrome: 189,
      safari: 356,
      firefox: 76,
      edge: 289,
      opera: 45,
      brave: 87,
    },
  },
  {
    date: "2024-04-10",
    records: {
      chrome: 356,
      safari: 167,
      firefox: 145,
      edge: 178,
      opera: 98,
      brave: 45,
    },
  },
  {
    date: "2024-04-11",
    records: {
      chrome: 289,
      safari: 298,
      firefox: 89,
      edge: 234,
      opera: 56,
      brave: 78,
    },
  },
  {
    date: "2024-04-12",
    records: {
      chrome: 423,
      safari: 145,
      firefox: 167,
      edge: 156,
      opera: 67,
      brave: 34,
    },
  },
  {
    date: "2024-04-13",
    records: {
      chrome: 178,
      safari: 389,
      firefox: 123,
      edge: 267,
      opera: 45,
      brave: 89,
    },
  },
  {
    date: "2024-04-14",
    records: {
      chrome: 334,
      safari: 189,
      firefox: 198,
      edge: 134,
      opera: 78,
      brave: 56,
    },
  },
  {
    date: "2024-04-15",
    records: {
      chrome: 267,
      safari: 234,
      firefox: 87,
      edge: 198,
      opera: 34,
      brave: 67,
    },
  },
  {
    date: "2024-04-16",
    records: {
      chrome: 398,
      safari: 178,
      firefox: 156,
      edge: 89,
      opera: 89,
      brave: 45,
    },
  },
  {
    date: "2024-04-17",
    records: {
      chrome: 456,
      safari: 267,
      firefox: 134,
      edge: 234,
      opera: 56,
      brave: 78,
    },
  },
  {
    date: "2024-04-18",
    records: {
      chrome: 234,
      safari: 198,
      firefox: 178,
      edge: 167,
      opera: 67,
      brave: 34,
    },
  },
  {
    date: "2024-04-19",
    records: {
      chrome: 378,
      safari: 289,
      firefox: 98,
      edge: 198,
      opera: 45,
      brave: 87,
    },
  },
  {
    date: "2024-04-20",
    records: {
      chrome: 189,
      safari: 134,
      firefox: 234,
      edge: 123,
      opera: 78,
      brave: 56,
    },
  },
  {
    date: "2024-04-21",
    records: {
      chrome: 345,
      safari: 356,
      firefox: 87,
      edge: 289,
      opera: 34,
      brave: 67,
    },
  },
  {
    date: "2024-04-22",
    records: {
      chrome: 298,
      safari: 167,
      firefox: 167,
      edge: 178,
      opera: 89,
      brave: 45,
    },
  },
  {
    date: "2024-04-23",
    records: {
      chrome: 423,
      safari: 298,
      firefox: 123,
      edge: 234,
      opera: 56,
      brave: 78,
    },
  },
  {
    date: "2024-04-24",
    records: {
      chrome: 267,
      safari: 145,
      firefox: 198,
      edge: 156,
      opera: 67,
      brave: 34,
    },
  },
  {
    date: "2024-04-25",
    records: {
      chrome: 389,
      safari: 389,
      firefox: 134,
      edge: 267,
      opera: 45,
      brave: 89,
    },
  },
  {
    date: "2024-04-26",
    records: {
      chrome: 156,
      safari: 189,
      firefox: 189,
      edge: 134,
      opera: 78,
      brave: 56,
    },
  },
  {
    date: "2024-04-27",
    records: {
      chrome: 445,
      safari: 234,
      firefox: 98,
      edge: 198,
      opera: 34,
      brave: 67,
    },
  },
  {
    date: "2024-04-28",
    records: {
      chrome: 234,
      safari: 178,
      firefox: 156,
      edge: 89,
      opera: 89,
      brave: 45,
    },
  },
  {
    date: "2024-04-29",
    records: {
      chrome: 378,
      safari: 267,
      firefox: 145,
      edge: 234,
      opera: 56,
      brave: 78,
    },
  },
  {
    date: "2024-04-30",
    records: {
      chrome: 298,
      safari: 198,
      firefox: 178,
      edge: 167,
      opera: 67,
      brave: 34,
    },
  },
];

const BrowsersAnalytics = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <AnalyticsContent data={chartData} />;
};
export default BrowsersAnalytics;
