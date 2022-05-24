import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import buildChartOption from "../utils/buildChartOption";
import chartData from "../data/chartData.json"
import _ from "lodash";
export default function Chart() {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={buildChartOption(_.get(chartData, 'data', []))}
    />
  );
}
