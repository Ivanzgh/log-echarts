<template>
  <div class="log_p_chart">
    <div class="log_chart_01" id="Chart04" style="height: 200px; width: 100%;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "Chart04",
  props: {
    chartWidth: String,
    newuser: Object
  },
  data() {
    return {
      initData: {
        total: "",
        line_data: []
      }
    };
  },
  mounted() {
    // this.$nextTick(function () {
    //   window.console.log(this.chartWidth)
    //   window.console.log('222222222222')
    //
    // })

    this.drawLine();
  },
  watch: {
    chartWidth: function() {
      let Chart04 = this.$echarts.init(document.getElementById("Chart04"));
      Chart04.resize();
    },
    newuser: {
      handler: function(val, oldVal) {
        window.console.log(oldVal);
        this.initData.total = val.total;
        this.initData.line_data = val.line_data;
        this.drawLine();
      },
      deep: true
    }
  },
  methods: {
    drawLine() {
      var data = [];
      var xData = [];

      this.initData.line_data.forEach(item => {
        data.push(item[1]);
        xData.push(item[0]);
      });

      // 基于准备好的dom，初始化echarts实例
      let Chart04 = this.$echarts.init(document.getElementById("Chart04"));
      if (this.initData.total != 0) {
        // 绘制图表
        Chart04.setOption({
          title: {
            right: "10",
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
            // name:'(月)',
            nameLocation: "end",
            nameTextStyle: {
              color: "#FFFFFF",
              align: "center",
              verticalAlign: "top",
              padding: [7, 15, 5, 5]
            },
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
            name: "新用户\n访问比率",
            nameLocation: "end",
            offset: -40,
            nameTextStyle: {
              color: "#99FFFF",
              fontSize: 16,
              fontWeight: 300,
              align: "left",
              padding: [5, 0, 0, -35]
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
              name: "访问比率",
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
        // 绘制图表
        Chart04.setOption({
          title: {
            right: "center",
            top: "center",
            text: "暂无数据",
            textStyle: {
              color: "#99FFFF",
              fontSize: 20
            }
          },
          xAxis: {
            type: "category",
            nameLocation: "end",
            nameTextStyle: {
              color: "#FFFFFF",
              align: "center",
              verticalAlign: "top",
              padding: [7, 15, 5, 5]
            },
            axisLabel: {
              // 坐标轴的标签
              show: false, // 是否显示
              color: "#ffffff"
            },
            boundaryGap: ["2%", "2%"],
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            data: xData
          },
          yAxis: {
            type: "value",
            name: "新用户\n访问比率",
            nameLocation: "end",
            offset: -40,
            nameTextStyle: {
              color: "#99FFFF",
              fontSize: 16,
              fontWeight: 300,
              align: "left",
              padding: [5, 0, 0, -35]
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
