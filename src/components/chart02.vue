<template>
  <div class="log_p_chart">
    <div class="log_chart_01" id="Chart02" style="height: 200px; width: 100%;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "Chart02",
  props: {
    chartWidth: String,
    uvData: Object
  },
  data() {
    return {
      initData: {
        total: "",
        item: {
          web: "",
          pc: "",
          android: "",
          ios: ""
        }
      }
    };
  },
  mounted() {
    this.drawLine();
     window.onresize = () => {
      //  根据窗口大小调整曲线大小
      let Chart02 = this.$echarts.init(document.getElementById("Chart02"));
      Chart02.resize();
    };
  },
  watch: {
    chartWidth: function() {
      let Chart02 = this.$echarts.init(document.getElementById("Chart02"));
      Chart02.resize();
    },
    uvData: {
      handler: function(val, oldVal) {
        window.console.log(oldVal);
        this.initData.total = val.total;
        this.initData.item = val.item;
        this.drawLine();
      },
      deep: true
    }
  },
  methods: {
    drawLine() {
      var colorArray = [
        {
          top: "rgba(0, 255, 234, 1)",
          bottom: "rgba(246, 193, 95, 1)",
          opacity: "rgba(246, 193, 95, 0.3)"
        },
        {
          top: "rgba(0, 255, 234, 1)",
          bottom: "rgba(89, 191, 255, 1)",
          opacity: "rgba(89, 191, 255, 0.3)"
        },
        {
          top: "rgba(0, 255, 234, 1)",
          bottom: "rgba(109, 245, 196, 1)",
          opacity: "rgba(109, 245, 196, 0.3)"
        },
        {
          top: "rgba(243, 102, 125, 1)",
          bottom: "rgba(255, 138, 157, 1)",
          opacity: "rgba(255, 138, 157, 0.3)"
        }
      ];
      // 基于准备好的dom，初始化echarts实例
      let Chart02 = this.$echarts.init(document.getElementById("Chart02"));
      // 绘制图表
      Chart02.setOption({
        title: [
          {
            text: "Uv",
            left: 30,
            top: 20,
            textStyle: {
              color: "#99FFFF",
              fontSize: 18
            }
          },
          {
            text: this.initData.total,
            right: 10,
            top: 20,
            textStyle: {
              color: "#99FFFF",
              fontSize: 30
            }
          }
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          formatter: function(params) {
            var sum1 = params[0].data == 100 ? 0 : params[0].data
            var sum2 = params[0].data == 100 ? 0 : params[1].data
            var res1 = '<span style="margin-left:16px;">' + params[0].seriesName + ':' + ' ' + sum1 + '</span> <br>'
            var res2 = '<span style="margin-left:16px;">' + params[1].seriesName + ':' + ' ' + sum2 + '</span> <br>'
            var res3 = '<span>' + params[0].name + '</span> <br>'
            var marker1 = `<span style="display:inline-block;margin-right:-6px;border-radius:10px;width:10px;height:10px;background-color:${params[0].color.colorStops[0].color};"></span>`
            var marker2 = `<span style="display:inline-block;margin-right:-6px;border-radius:10px;width:10px;height:10px;background-color:${params[1].color.colorStops[0].color};"></span>`
            var res = '<div>' + res3 + marker1 + res1 + marker2 + res2 + '</div>'
          return res;
         }
        },
        grid: {
          left: 96,
          bottom: 20
        }, 
        xAxis: {
          type: "value",
          show: false,
          position: "top",
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: [
          {
            type: "category",
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              align: 'left',
              margin: 66,
              color: '#fff',
              fontSize: 18
            },
            data: ["pc", "web", "android", "ios"]
          }
        ],
        series: [
          {
            name: "总量",
            type: "bar",
            label: {
              show: false
            },
            itemStyle: {
              normal: {
                show: true,
                color: function(params) {
                  let num = colorArray.length;
                  return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: colorArray[params.dataIndex % num].opacity
                    },
                    {
                      offset: 1,
                      color: colorArray[params.dataIndex % num].opacity
                    }
                  ]);
                },
                barBorderRadius: [0, 70, 70, 0]
              }
            },
            barGap: "-100%",
            barCategoryGap: "50%",
            data: [
              this.initData.total || 100,
              this.initData.total || 100,
              this.initData.total || 100,
              this.initData.total || 100
            ]
          },
          {
            name: "访问量",
            type: "bar",
            label: {
              show: false
            },
            itemStyle: {
              normal: {
                show: true,
                color: function(params) {
                  let num = colorArray.length;
                  return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                      offset: 0,
                      color: colorArray[params.dataIndex % num].bottom
                    },
                    {
                      offset: 1,
                      color: colorArray[params.dataIndex % num].top
                    }
                  ]);
                },
                barBorderRadius: [0, 70, 70, 0]
              }
            },
            barGap: "-100%",
            barCategoryGap: "50%",
            data: [
              this.initData.item.pc,
              this.initData.item.web,
              this.initData.item.android,
              this.initData.item.ios
            ]
          }
        ]
      });
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
