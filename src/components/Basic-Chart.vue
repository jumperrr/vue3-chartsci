<template>
  <div>
    <div class="container text-center mt-4 p-4">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Basic Chart</h5>
              <button class="btn btn-sm btn-dark" @click="getData()">
                Get Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="scichart-root" style="width: 800px; height: 600px"></div>
  </div>
</template>

<script>
import ChartDataService from "../services/ChartDataService";
import {
  SciChartSurface,
  NumericAxis,
  FastLineRenderableSeries,
} from "scichart";

export default {
  name: "ChartComponent",
  mounted() {
    this.getData();
    this.initSciChart();
  },
  data() {
    return {
        data: [],
    };
  },

  methods: {
    async getData() {
      ChartDataService.getAll()
        .then((res) => {
          console.log(res.data);
          this.data = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async initSciChart() {
      const { sciChartSurface, wasmContext } = await SciChartSurface.create("scichart-root");

      sciChartSurface.xAxes.add(new NumericAxis(wasmContext));
      sciChartSurface.yAxes.add(new NumericAxis(wasmContext));

      const lineSeries = new FastLineRenderableSeries(wasmContext);
      sciChartSurface.renderableSeries.add(lineSeries);

      const xValues = this.data.map(item => item.dt);
      const yValues = this.data.map(item => item.price);
      
      lineSeries.dataSeries.appendRange(xValues, yValues);
    }
  },
};
</script>

<style>
</style>