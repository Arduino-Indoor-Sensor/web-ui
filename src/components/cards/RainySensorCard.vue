<template>
  <a-card
    style="border-radius: 12px; height: 100%;"
    bodyStyle="display:flex; align-items: center; justify-content: center"
  >
    <template #title>
      <h4>降雨强度</h4>
    </template>
    <div id="rainy-gauge" style="width: 400px; height: 150px"></div>
  </a-card>
</template>

<script>
import * as echarts from "echarts";
export default {
  props: ["value"],
  methods: {
    initChart() {
      var option = {
        series: [
          {
            type: "gauge",
            center: ["50%", "80%"],
            radius: "135%",
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 1,
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.25, "#FF6E76"],
                  [0.5, "#FDDD60"],
                  [0.75, "#58D9F9"],
                  [1, "#7CFFB2"],
                ],
              },
            },
            pointer: {
              icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
              length: "12%",
              width: 20,
              offsetCenter: [0, "-60%"],
              itemStyle: {
                color: "inherit",
              },
            },
            axisTick: {
              length: 12,
              lineStyle: {
                color: "inherit",
                width: 1,
              },
            },
            splitLine: {
              length: 20,
              lineStyle: {
                color: "inherit",
                width: 2,
              },
            },
            axisLabel: {
              show: false,
              color: "#464646",
              fontSize: 10,
              distance: -50,
              formatter: function (value) {
                if (value === 0) {
                  return "无";
                } else if (value === 256) {
                  return "轻度";
                } else if (value === 512) {
                  return "中度";
                } else if (value === 1024) {
                  return "重度";
                }
                return "";
              },
            },
            title: {
              offsetCenter: [0, "-20%"],
              fontSize: 10,
            },
            detail: {
              show:false,
              fontSize: 10,
              offsetCenter: [0, "0%"],
              valueAnimation: true,
              formatter: function (value) {
                return 1024 - value;
              },
              color: "inherit",
            },
            data: [
              {
                value: (1024 - this.value) / 1024,
                name: "sensor value",
              },
            ],
          },
        ],
      };
      const myChart = echarts.init(document.getElementById("rainy-gauge"));
      myChart.setOption(option);
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>
