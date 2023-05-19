import BarChart from "components/chart/BarChart";
import { barChartData, barChartOptions } from "variables/charts";

const Chart = () => {
  return <BarChart chartData={barChartData} chartOptions={barChartOptions} />;
};

export default Chart;
