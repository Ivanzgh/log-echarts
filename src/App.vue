<template>
  <div id="app">
    <div class="log_top"></div>
    <div class="log_time">{{NowDate}}</div>
    <div class="log_platform">
      <div class="log_conrner">
        <div class="log_c_01"></div>
        <div class="log_c_02"></div>
        <div class="log_c_03"></div>
        <div class="log_c_04"></div>
        <div class="log_c_05"></div>
        <div class="log_c_06"></div>
        <div class="log_c_07"></div>
        <div class="log_c_08"></div>
      </div>
      <div class="log_p_bg"></div>
      <div class="log_p_top">
        <div class="log_p_left">
          <div class="log_p_title">XXXX平台</div>
          <div class="log_p_YMW">
            <ul>
              <li @click="handleTime('week')">周</li>
              <li @click="handleTime('month')">月</li>
              <li @click="handleTime('year')">年</li>
            </ul>
          </div>
          <div class="log_p_time_warp">
            <input type="date" class="log_p_time" placeholder="请选择时间" v-model="selectTime" />
          </div>
        </div>
        <div class="log_p_line"></div>
        <div class="log_p_chart_warp" ref="companyStyle">
          <Chart01 :chartWidth="chartWidth" :pvData="pvData"></Chart01>
          <Chart02 :chartWidth="chartWidth" :uvData="uvData"></Chart02>
          <Chart03 :chartWidth="chartWidth" :olduser="olduser"></Chart03>
          <Chart04 :chartWidth="chartWidth" :newuser="newuser"></Chart04>
          <Chart05 :chartWidth="chartWidth" :revisit_times="revisit_times"></Chart05>
        </div>
        <div class="log_p_chart_click_warp">
          <div class="log_p_chart">
            <div class="log_chart_01" id="Chart06" :style="{width: '200px', height: '200px'}"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="log_b">
      <div class="log_b_l">
        <div class="log_conrner">
          <div class="log_c_01"></div>
          <div class="log_c_02"></div>
          <div class="log_c_03"></div>
          <div class="log_c_04"></div>
          <div class="log_c_05"></div>
          <div class="log_c_06"></div>
          <div class="log_c_07"></div>
          <div class="log_c_08"></div>
        </div>
        <div class="log_b_bg"></div>
        <div class="log_b_top">
          <div class="log_l_input_warp">
            <input type="text" class="log_l_input" placeholder="请输入关键词" />
          </div>
          <ul class="log_scroll">
            <li
              v-for="(item,index) in this.system_name"
              :key="index"
              @click="handleClick(index,item[1])"
              :class="{'active':index == checkindex }"
            >{{item[0]}}</li>
          </ul>
        </div>
      </div>
      <div class="log_b_m">
        <div class="log_conrner">
          <div class="log_c_01"></div>
          <div class="log_c_02"></div>
          <div class="log_c_03"></div>
          <div class="log_c_04"></div>
          <div class="log_c_05"></div>
          <div class="log_c_06"></div>
          <div class="log_c_07"></div>
          <div class="log_c_08"></div>
        </div>
        <div class="log_b_bg"></div>
        <div class="log_b_top" ref="companyStyle01">
          <div class="log_b_m_inner">
            <div class="log_b_m_left">
              <div class="log_b_m_line01">
                <Chart07 :chartWidth01="chartWidth01" :business_pv="business_pv"></Chart07>
                <Chart08 :chartWidth01="chartWidth01" :business_uv="business_uv"></Chart08>
              </div>
              <div class="log_b_m_text">注册用户活跃度</div>
              <div class="log_b_m_l_b log_scroll">
                <div style="height: 200px;">
                  <Chart09 :chartWidth01="chartWidth01" :avg_station_time="avg_station_time"></Chart09>
                </div>
                <div style="height: 200px;">
                  <Chart10 :chartWidth01="chartWidth01" :avg_page_time="avg_page_time"></Chart10>
                </div>
              </div>
            </div>
            <div class="log_b_m_right">
              <div class="log_b_m_line01">
                <Chart11 :chartWidth01="chartWidth01" :uid="uid"></Chart11>
              </div>
              <div class="log_b_m_r_bottom">
                <div class="log_b_bg"></div>
                <div class="log_b_m_r_bottom_line01"></div>
                <div class="log_b_m_r_bottom_line02"></div>
                <div class="log_b_top">
                  <div class="log_b_m_r_b_top">
                    <ul>
                      <li>特定页面</li>
                      <li>平均时长</li>
                      <li>平均次数</li>
                    </ul>
                  </div>
                  <div class="log_b_m_r_b_bottom_warp log_scroll">
                    <div
                      class="log_b_m_r_b_bottom"
                      v-for="(item,index) in this.business_page"
                      :key="index"
                    >
                      <ul>
                        <li>{{item[0]}}</li>
                        <li>
                          <div class="log_b_m_r_bar_warp">
                            <div class="log_b_m_r_bar_bg"></div>
                            <div
                              class="log_b_m_r_bar"
                              :style="`width: ${item[1]/sumPageTime*100}%`"
                            >
                              <span>{{item[1]}}</span>
                            </div>
                          </div>
                        </li>
                        <li>{{item[2]}}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="log_b_r">
        <div class="log_conrner">
          <div class="log_c_01"></div>
          <div class="log_c_02"></div>
          <div class="log_c_03"></div>
          <div class="log_c_04"></div>
          <div class="log_c_05"></div>
          <div class="log_c_06"></div>
          <div class="log_c_07"></div>
          <div class="log_c_08"></div>
        </div>
        <div class="log_b_bg"></div>
        <div class="log_b_top">
          <div class="log_b_r_line01"></div>
          <div class="log_b_r_line02"></div>
          <div class="log_r_top">
            <ul>
              <li>功能模块</li>
              <li>Pv</li>
              <li>Uv</li>
            </ul>
          </div>
          <div class="log_r_bottom_warp log_scroll">
            <div class="log_r_bottom" v-for="(item,index) in this.business_module" :key="index">
              <ul>
                <li>{{item[0]}}</li>
                <li>{{item[1]}}</li>
                <li>{{item[2]}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart01 from "./components/chart01";
import Chart02 from "./components/chart02";
import Chart03 from "./components/chart03";
import Chart04 from "./components/chart04";
import Chart05 from "./components/chart05";
import Chart07 from "./components/chart07";
import Chart08 from "./components/chart08";
import Chart09 from "./components/chart09";
import Chart10 from "./components/chart10";
import Chart11 from "./components/chart11";
export default {
  name: "app",
  components: {
    Chart02,
    Chart03,
    Chart04,
    Chart05,
    Chart07,
    Chart08,
    Chart09,
    Chart10,
    Chart11,
    Chart01
  },
  data() {
    return {
      chartWidth: "",
      chartWidth01: "",
      chartHeight01: "",
      mas: "1233333",
      checkindex: 0, // 默认选中菜单栏第一项
      pvData: {},
      uvData: {},
      olduser: {},
      newuser: {},
      revisit_times: {},
      browser_rate: {},
      business_pv: {},
      business_uv: {},
      avg_station_time: {},
      avg_page_time: {},
      uid: {},
      business_module: [],
      business_page: [],
      system_name: [],
      system_id: "",
      dateType: "",
      selectTime: "",
      sumPageTime: 0, // 特定页面平均时长总数,
      NowDate: ""
    };
  },
  mounted() {
    let me = this;
    this.$nextTick(function() {
      me.chartWidth = (me.$refs.companyStyle.clientWidth - 10) / 5 + "px";
      me.chartWidth01 = me.$refs.companyStyle01.clientWidth / 4 + "px";
      me.chartHeight01 = me.$refs.companyStyle01.clientHeight / 3 + "px";
    });

    window.onresize = () => {
      //  根据窗口大小调整曲线大小
      me.chartWidth = (me.$refs.companyStyle.clientWidth - 10) / 5 + "px";
      me.chartWidth01 = me.$refs.companyStyle01.clientWidth / 4 + "px";
      me.chartHeight01 = me.$refs.companyStyle01.clientHeight / 3 + "px";
    };

    this.time = setInterval(() => {
      this.getNowDate();
    }, 1000);
  },
  watch: {
    chartWidth: function() {
      this.drawLine();
    },
    browser_rate: {
      handler: function(val, oldVal) {
        window.console.log(oldVal);
        this.browser_rate = val;
        this.drawLine();
      },
      deep: true
    },
    selectTime: function() {
      this.dateType = "";
      this.getBusinessData(this.system_id, this.dateType, this.selectTime);
      this.getShowData(this.dateType, this.selectTime);
    }
  },
  methods: {
    drawLine() {
      let Chart06 = this.$echarts.init(document.getElementById("Chart06"));

      var scaleData = [];
      for (let key in this.browser_rate) {
        let obj = {};
        obj.name = key;
        obj.value = parseFloat(this.browser_rate[key]);
        scaleData.push(obj);
      }

      var rich = {
        white: {
          color: "#ddd",
          align: "left"
        }
      };
      var placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: "rgba(0, 0, 0, 0)",
          borderColor: "rgba(255, 255, 255, 1)",
          borderWidth: 0
        }
      };
      var data01 = [];
      var color = [
        "#00ffff",
        "#00cfff",
        "#006ced",
        "#ffe000",
        "#ffa800",
        "#ff5b00",
        "#ff3000"
      ];
      for (let i = 0; i < scaleData.length; i++) {
        data01.push(
          {
            value: scaleData[i].value,
            name: scaleData[i].name,
            itemStyle: {
              normal: {
                borderWidth: 6,
                shadowBlur: 5,
                borderColor: color[i],
                shadowColor: color[i]
              }
            }
          },
          {
            value: 4,
            name: "",
            itemStyle: placeHolderStyle
          }
        );
      }
      var seriesObj = [
        {
          name: "",
          type: "pie",
          clockWise: false,
          radius: [36, 40],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: "outside",
                color: "#fff",
                formatter: function(params) {
                  if (params.name !== "") {
                    return params.name;
                  } else {
                    return "";
                  }
                },
                rich: rich
              },
              labelLine: {
                show: false,
                length: 5,
                length2: 5
              }
            }
          },
          data: data01
        }
      ];

      if (Object.keys(this.browser_rate).length !== 0) {
        Chart06.setOption({
          title: {
            left: "0",
            top: "20",
            text: "",
            textStyle: {
              color: "#99FFFF",
              fontSize: 16,
              fontWeight: 300
            }
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c}%"
          },
          legend: {
            show: false
          },
          toolbox: {
            show: false
          },
          series: seriesObj
        });
      } else {
        Chart06.setOption({
          title: {
            left: "center",
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
              show: false
            },
            boundaryGap: ["2%", "2%"],
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            data: []
          },
          yAxis: {
            type: "value",
            name: "浏览器",
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
    },
    getBusinessData(systemName, dataType, selectDay) {
      let baseUrl = "/business/?system_name=" + systemName;
      if (dataType !== "" && selectDay === "") {
        baseUrl = baseUrl + "&date_type=" + dataType;
      }
      if (selectDay !== "" && dataType === "") {
        baseUrl = baseUrl + "&select_day=" + selectDay;
      }

      this.$axios.get(baseUrl).then(res => {
        if (res.returnCode === "200") {
          this.business_pv = res.returnData.pv;
          this.business_uv = res.returnData.uv;
          this.avg_station_time =
            res.returnData.register_activity.avg_station_time;
          this.avg_page_time = res.returnData.register_activity.avg_page_time;
          this.uid = res.returnData.uid;
          this.business_module = res.returnData.module;
          this.business_page = res.returnData.page;

          if (this.sumPageTime !== 0) {
            this.sumPageTime = 0;
          }
          this.business_page.forEach(item => {
            this.sumPageTime += Number(item[1]);
          });
        } else {
          window.console.log(res.returnMsg);
        }
      });
    },
    getShowData(dataType, selectDay) {
      let showUrl = "/platform_display/";
      if (dataType !== "" && selectDay === "") {
        showUrl = showUrl + "?date_type=" + dataType;
      }
      if (selectDay !== "" && dataType === "") {
        showUrl = showUrl + "?select_day=" + selectDay;
      }
      this.$axios.get(showUrl).then(res => {
        if (res.returnCode === "200") {
          this.pvData = res.returnData.pv;
          this.uvData = res.returnData.uv;
          this.olduser = res.returnData.new_old_rate.olduser;
          this.newuser = res.returnData.new_old_rate.newuser;
          this.revisit_times = res.returnData.revisit_times;
          this.browser_rate = res.returnData.browser_rate;
        } else {
          window.console.log(res.returnMsg);
        }
      });
    },
    getSystemName() {
      this.$axios.get("log_data/systemname/").then(res => {
        if (res.returnCode === "200") {
          this.system_name = res.returnData.system_name;
          this.system_id = res.returnData.system_name[0][1];

          this.getBusinessData(this.system_id, this.dateType, this.selectTime);
          this.getShowData(this.dateType, this.selectTime);
        } else {
          window.console.log(res.returnMsg);
        }
      });
    },
    handleClick(index, id) {
      this.checkindex = index;
      this.system_id = id;
      this.getBusinessData(id, this.dateType, this.selectTime);
    },
    handleTime(params) {
      this.dateType = params;
      this.selectTime = "";
      this.getBusinessData(this.system_id, params, this.selectTime);
      this.getShowData(params, this.selectTime);
    },
    refreshData() {
      setInterval(() => {
        this.getSystemName();
      }, 5000);
    },
    getNowDate() {
      var nowDate = new Date();
      var year = nowDate.getFullYear();
      var month =
        nowDate.getMonth() + 1 > 10
          ? nowDate.getMonth() + 1
          : "0" + (nowDate.getMonth() + 1);
      var day =
        nowDate.getDate() > 10 ? nowDate.getDate() : "0" + nowDate.getDate();
      var hour =
        nowDate.getHours() > 10
          ? nowDate.getHours()
          : nowDate.getHours() === 0
          ? 24
          : "0" + nowDate.getHours();
      var minutes =
        nowDate.getMinutes() >= 10
          ? nowDate.getMinutes()
          : "0" + nowDate.getMinutes();
      this.NowDate =
        year + "年" + month + "月" + day + "日" + " " + hour + ":" + minutes;
    }
  },
  created() {
    this.getSystemName();
    this.refreshData();
  },
  beforeDestroy() {
    if (this.time) {
      clearInterval(this.time);
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  background: #000000;
  padding: 0;
  margin: 0;
  min-width: 1080px;
}
ul {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url("./assets/bg.png") no-repeat;
  background-size: contain;
  padding: 30px 50px 30px;
}
.log_top {
  height: 73.5px;
  margin: 0 auto;
  background: url("./assets/dbt.png") no-repeat;
  background-size: contain;
}
.log_time {
  position: absolute;
  right: 53px;
  top: 48px;
  color: #99ffff;
}
.log_platform {
  margin: 30px auto;
  height: 200px;
  position: relative;
}
.log_conrner {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.log_c_01 {
  width: 16px;
  height: 1px;
  background: rgba(0, 255, 255, 1);
  position: absolute;
  left: 0;
  top: 0;
}
.log_c_02 {
  width: 16px;
  height: 1px;
  background: rgba(0, 255, 255, 1);
  position: absolute;
  right: 0;
  top: 0;
}
.log_c_03 {
  width: 16px;
  height: 1px;
  background: rgba(0, 255, 255, 1);
  position: absolute;
  right: 0;
  bottom: -1px;
}
.log_c_04 {
  width: 16px;
  height: 1px;
  background: rgba(0, 255, 255, 1);
  position: absolute;
  left: 0;
  bottom: -1px;
}
.log_c_05 {
  height: 16px;
  width: 1px;
  background: rgba(0, 255, 255, 1);
  position: absolute;
  left: -1px;
  top: 0;
}
.log_c_06 {
  height: 16px;
  width: 1px;
  background: rgba(0, 255, 255, 1);
  position: absolute;
  right: -1px;
  top: 0;
}
.log_c_07 {
  height: 16px;
  width: 1px;
  background: rgba(0, 255, 255, 1);
  position: absolute;
  right: -1px;
  bottom: -1px;
}
.log_c_08 {
  height: 16px;
  width: 1px;
  background: rgba(0, 255, 255, 1);
  position: absolute;
  left: -1px;
  bottom: -1px;
}
.log_p_bg {
  width: 100%;
  height: 100%;
  background: rgba(22, 208, 255, 0.23);
  border: 1px solid rgba(116, 205, 206, 1);
  opacity: 0.4;
}
.log_p_top {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.log_p_left {
  width: 20%;
  display: inline-block;
  overflow: hidden;
  height: 200px;
}
.log_p_title {
  height: 30px;
  border-left: 8px solid #00ffff;
  font-size: 30px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(153, 255, 255, 1);
  line-height: 30px;
  margin-top: 17px;
  padding-left: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.log_p_YMW {
  margin-top: 26px;
  overflow: hidden;
}
.log_p_YMW ul {
  height: 36px;
  margin: 0 31px 0 31px;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
}
.log_p_YMW li {
  float: left;
  height: 36px;
  background: rgba(22, 208, 255, 0.16);
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 255, 255, 1);
  line-height: 36px;
  text-align: center;
  list-style: none;
  order: 1;
  flex-grow: 1;
}
.log_p_YMW li:nth-child(2) {
  margin-right: 10px;
  margin-left: 10px;
}
.log_p_time_warp {
  padding-left: 31px;
  padding-right: 31px;
  height: 48px;
  margin-top: 21px;
}

input[type="date"]::-webkit-inner-spin-button {
  display: none;
}
input[type="date"]::-webkit-calendar-picker-indicator:hover {
  background-color: rgba(22, 208, 255, 0.18);
}

.log_p_time {
  width: 100%;
  padding-left: 8px;
  padding-right: 45px;
  background-image: url("./assets/riqi.png");
  background-position: 90% 8px;
  background-repeat: no-repeat;
  background-color: rgba(22, 208, 255, 0.18);
  border: 1px solid rgba(0, 144, 144, 1);
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(153, 255, 255, 1);
  line-height: 37px;
  outline: none;
  box-sizing: border-box;
}
.log_p_time::-webkit-input-placeholder {
  color: #99ffff;
}
.log_p_time::-moz-placeholder {
  color: #99ffff;
}
.log_p_time::-ms-input-placeholder {
  color: #99ffff;
}
.log_p_line {
  display: inline-block;
  width: 4px;
  height: 190px;
  position: absolute;
  left: 20%;
  top: 5px;
  background: linear-gradient(
    0deg,
    rgba(0, 255, 255, 0) 0%,
    rgba(0, 255, 255, 1) 49%,
    rgba(0, 255, 255, 0) 100%
  );
}
.log_p_chart_warp {
  position: absolute;
  right: 200px;
  left: 20%;
  top: 0;
}
.log_p_chart {
  display: inline-block;
  width: 20%;
}
.log_p_chart_click_warp {
  width: 200px;
  position: absolute;
  right: 0;
  top: 0;
}
.log_b {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  height: calc(100vh - 393.5px);
}
.log_b_bg {
  width: 100%;
  height: 100%;
  background: rgba(22, 208, 255, 0.23);
  border: 1px solid rgba(116, 205, 206, 1);
  opacity: 0.4;
  box-sizing: border-box;
}
.log_b_top {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.log_b_l {
  flex-grow: 360;
  height: 100%;
  position: relative;
  order: 1;
}
.log_l_input_warp {
  padding: 30px;
}
.log_l_input {
  width: 100%;
  height: 48px;
  padding-left: 48px;
  background-image: url("./assets/sousuo.png");
  background-repeat: no-repeat;
  background-position: 20px 15px;
  background-color: rgba(22, 208, 255, 0.16);
  border: 1px solid rgba(0, 144, 144, 1);
  border-radius: 24px;
  outline: none;
  box-sizing: border-box;
  color: #99ffff;
  font-size: 18px;
}
.log_l_input::-webkit-input-placeholder {
  color: #99ffff;
}
.log_l_input::-moz-placeholder {
  color: #99ffff;
}
.log_l_input::-ms-input-placeholder {
  color: #99ffff;
}
.log_b_l ul {
  margin: 0;
  padding: 0;
  left: 30px;
  position: absolute;
  top: 100px;
  bottom: 30px;
  right: 0;
}
.log_b_l li {
  list-style: none;
  height: 64px;
  text-align: center;
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(51, 255, 255, 1);
  line-height: 64px;
  overflow: hidden;
  padding-right: 30px;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
/*.log_b_l li:hover{*/
/*  background: url("./assets/xz.png") center no-repeat;*/
/*  font-size: 30px;*/
/*  color: #ffffff;*/
/*}*/
.log_b_l .active {
  background: url("./assets/xz.png") center no-repeat;
  font-size: 30px;
  color: #ffffff;
}
.log_b_m {
  flex-grow: 1031;
  height: 100%;
  position: relative;
  margin-left: 24px;
  margin-right: 24px;
  order: 2;
}
.log_b_m_inner {
  height: 100%;
  position: relative;
}
.log_b_m_left {
  margin-left: 2%;
  width: 47%;
  height: 100%;
  position: relative;
}
.log_b_chart01 {
  display: inline-block;
  width: 50%;
  height: 30%;
}
.log_b_m_l_b {
  height: calc(100% - 203px);
  width: 100%;
  position: relative;
}
.log_b_chart02 {
  display: inline-block;
  width: 100%;
  height: 50%;
}
.log_b_m_text {
  height: 23px;
  border-left: 6px solid #00ffff;
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(153, 255, 255, 1);
  line-height: 23px;
  padding-left: 18px;
  margin-left: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.log_b_m_line01 {
  height: 180px;
  width: 100%;
  position: relative;
}
.log_b_m_right {
  width: 49%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
}
.log_b_r {
  position: relative;
  flex-grow: 360;
  order: 3;
  height: 100%;
}
.log_b_m_r_bottom {
  right: 25px;
  left: 25px;
  position: absolute;
  bottom: 25px;
  top: 180px;
}
.log_b_m_r_bottom_line01 {
  width: 1px;
  height: 100%;
  position: absolute;
  left: 25%;
  top: 0;
  background: rgba(51, 102, 129, 1);
}
.log_b_m_r_bottom_line02 {
  width: 1px;
  height: 100%;
  position: absolute;
  right: 25%;
  top: 0;
  background: rgba(51, 102, 129, 1);
}
.log_b_m_r_b_top {
  height: 48px;
  background: rgba(22, 208, 255, 0.16);
}
.log_b_m_r_b_top ul {
  width: 100%;
  height: 48px;
}
.log_b_m_r_b_top ul li {
  text-align: center;
  line-height: 48px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(145, 255, 255, 1);
  list-style: none;
  display: inline-block;
  width: 24%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.log_b_m_r_b_top ul li:nth-child(2) {
  width: 50%;
}
.log_b_m_r_b_bottom_warp {
  position: absolute;
  left: 0;
  right: 0;
  top: 48px;
  bottom: 0;
}
.log_b_m_r_b_bottom ul {
  width: 100%;
  height: 48px;
}
.log_b_m_r_b_bottom ul li {
  text-align: center;
  line-height: 48px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  list-style: none;
  display: inline-block;
  width: 25%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.log_b_m_r_b_bottom ul li:nth-child(1) {
  font-weight: 400;
  color: rgba(254, 255, 255, 1);
}
.log_b_m_r_b_bottom ul li:nth-child(2) {
  width: 50%;
  height: 100%;
  position: relative;
}
.log_b_m_r_b_bottom ul li:nth-child(3) {
  font-weight: bold;
  color: rgba(153, 255, 255, 1);
}
.log_b_m_r_bar_warp {
  height: 12px;
  position: absolute;
  left: 10%;
  right: 10%;
  top: 18px;
}
.log_b_m_r_bar_warp:hover span {
  color: #fff;
  display: block;
}
.log_b_m_r_bar_bg {
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background: #336681;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
}
.log_b_m_r_bar {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: url("./assets/bar_bg.jpg") no-repeat;
  background-size: cover;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
}
.log_b_m_r_bar span {
  display: none;
}
.log_r_top {
  height: 48px;
  background: rgba(22, 208, 255, 0.16);
}
.log_r_top ul {
  width: 100%;
  height: 48px;
}
.log_r_bottom ul {
  width: 100%;
  height: 48px;
}
.log_r_bottom ul li {
  text-align: center;
  line-height: 48px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  list-style: none;
  display: inline-block;
  width: 33%;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.log_r_bottom ul li:nth-child(1) {
  font-weight: 400;
  color: rgba(254, 255, 255, 1);
}
.log_r_bottom ul li:nth-child(2) {
  font-weight: bold;
  color: rgba(244, 189, 90, 1);
}
.log_r_bottom ul li:nth-child(3) {
  font-weight: bold;
  color: rgba(153, 255, 255, 1);
}
.log_r_top ul li {
  text-align: center;
  line-height: 48px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(145, 255, 255, 1);
  list-style: none;
  display: inline-block;
  width: 33%;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.log_b_r_line01 {
  width: 1px;
  height: 100%;
  position: absolute;
  left: 33%;
  top: 0;
  background: rgba(51, 102, 129, 1);
}
.log_b_r_line02 {
  width: 1px;
  height: 100%;
  position: absolute;
  right: 33%;
  top: 0;
  background: rgba(51, 102, 129, 1);
}
.log_scroll {
  overflow-y: auto;
  overflow-x: hidden;
}
/* 设置滚动条的样式 */
.log_scroll::-webkit-scrollbar {
  width: 10px;
  background: rgba(9, 54, 75, 1);
  opacity: 0.4;
  border-radius: 5px;
}

/* 滚动条滑块 */
.log_scroll::-webkit-scrollbar-thumb {
  background: rgba(0, 144, 144, 1);
  border: 1px solid rgba(0, 144, 144, 1);
  border-radius: 5px;
}
.log_r_bottom_warp {
  position: absolute;
  left: 0;
  right: 0;
  top: 48px;
  bottom: 0;
}
</style>
