<template>
  <div class="log_b_chart02" style="height: 100%; width: 100%;">
    <div class="log_chart_01" id="Chart11" style="height: 100%; width: 100%;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "Chart11",
  props: {
    chartWidth01: String,
    uid: Object
  },
  data() {
    return {
      initData: {
        total: "",
        line_data: []
      }
    };
  },
  watch: {
    chartWidth01: function() {
      let Chart11 = this.$echarts.init(document.getElementById("Chart11"));
      Chart11.resize();
    },
    uid: {
      handler: function(val, oldVal) {
        window.console.log(oldVal);
        this.initData.total = val.total;
        this.initData.line_data = val.line_data;
        this.drawLine();
      },
      deep: true
    }
  },
  mounted() {
    this.drawLine();
    window.onresize = () => {
      //  根据窗口大小调整曲线大小
      let Chart11 = this.$echarts.init(document.getElementById("Chart11"));
      Chart11.resize();
    };
  },
  methods: {
    drawLine() {
      var data = [];
      var xData = [];

      this.initData.line_data.forEach(item => {
        data.push(item[1]);
        xData.push(item[0]);
      });
      let Chart11 = this.$echarts.init(document.getElementById("Chart11"));
      if (this.initData.total != 0) {
        Chart11.setOption({
          title: {
            right: "30",
            top: "20",
            text: this.initData.total,
            textStyle: {
              color: "#99FFFF",
              fontSize: 30
            }
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          xAxis: {
            type: "category",
            axisLabel: {
              // 坐标轴的标签
              show: true, // 是否显示
              color: "#ffffff"
            },
            boundaryGap: ["2%", "2%"],
            axisLine: {
              show: true,
              lineStyle: {
                color: "#256BBB"
              }
            },
            axisTick: {
              show: false
            },
            data: xData
          },
          yAxis: {
            type: "value",
            name: "UIO访问频率",
            nameLocation: "end",
            offset: -40,
            nameTextStyle: {
              color: "#99FFFF",
              fontSize: 16,
              fontWeight: 300
            },
            axisLine: {
              // 坐标轴 轴线
              show: false
            },
            axisTick: {
              // 坐标轴的刻度
              show: false // 是否显示
            },
            splitLine: {
              // gird 区域中的分割线
              show: false // 是否显示
            },
            splitArea: {
              // 网格区域
              show: false // 是否显示，默认为false
            },
            axisLabel: {
              // 坐标轴的标签
              show: false // 是否显示
            }
          },
          series: [
            {
              name: "访问频率",
              type: "line",
              smooth: true,
              symbol: "none",
              sampling: "average",
              itemStyle: {
                color: "rgb(153, 255, 255, 1)"
              },
              areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(37, 107, 187, 1)"
                  },
                  {
                    offset: 1,
                    color: "rgb(37, 107, 187, 0)"
                  }
                ])
              },
              data: data
            }
          ],
          dataZoom: [
            {
              type: "slider",
              start: 0,
              end: 10
            }
          ]
        });
      } else {
        Chart11.setOption({
          title: {
            right: "center",
            top: "center",
            text: "暂无数据",
            textStyle: {
              color: "#99FFFF",
              fontSize: 20
            }
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          xAxis: {
            type: "category",
            axisLabel: {
              show: false, 
              color: "#ffffff"
            },
            boundaryGap: ["2%", "2%"],
            axisLine: {
              show: false,
              lineStyle: {
                color: "#256BBB"
              }
            },
            axisTick: {
              show: false
            },
            data: xData
          },
          yAxis: {
            type: "value",
            name: "UIO访问频率",
            nameLocation: "end",
            offset: -40,
            nameTextStyle: {
              color: "#99FFFF",
              fontSize: 16,
              fontWeight: 300
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false 
            },
            splitLine: {
              show: false 
            },
            splitArea: {
              show: false 
            },
            axisLabel: {
              show: false
            }
          }
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
