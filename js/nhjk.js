window.addEventListener("load", function () {
  //工地能耗走势
  var chenyan3 = echarts.init(document.querySelector(".l_a_mjt"));
  var option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['6/19', '6/20', '6/21', '6/22', '6/23', '6/24', '6/25', '6/27', '6/28', '6/29', '6/30'],
      axisLabel: {
        color: 'red'
      },
      axisLabel: {
        color: '#AFB5BA',
        fontSize: 10
      }
    },
    yAxis:
      [{ // 纵轴标尺固定
        type: 'value',
        scale: true,
        max: 10000,
        min: 0,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#AFB5BA',
          }
        },
        splitNumber: 10,
        boundaryGap: [0.2, 0.2],

        axisLabel: {
          color: '#8B8C8D',
          fontSize: 10
        }
      }],

    series: [
      {
        data: [2100, 4100, 5500, 2100, 4300, 6300, 3000, 4000, 6400, 3000, 8900],
        type: 'line',
        areaStyle: {//区域填充渐变颜色
          color: {
            type: 'linear',
            colorStops: [{
              offset: 0, color: 'rgba(237,66,100, 0.5)' // 0% 处的颜色
            }, {
              offset: 1, color: 'rgba(234,174,10, 1)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          }
        }
      }],

    grid: {
      height: '74%',
      top: 17,
      left: 50,

    }
  };
  // 3. 把配置给实例对象
  chenyan3.setOption(option);

  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    chenyan3.resize();
  });

  // --------------------------------------------------------
  // 今日用电动态
  var mb = echarts.init(this.document.querySelector(".m_b_box2"));
  var option = {
    xAxis: {
      type: 'category',
      /*改变x轴颜色*/
      axisLine: {
        lineStyle: {
          color: '#52555C'
        }
      },
      axisLabel: {
        color: '#C7CDD1',
        fontSize: 8
      },
      splitLine: {
        show: false,
      },
      boundaryGap: false,
      data: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00']
    },

    grid: {
      top: 10,
      x: 30,
      x2: 20,
      y2: 80,
      width: '86%',
      height: '60%',
      left: 35
    },
    tooltip: {
      show: true,
      trigger: 'axis', // 触发类型  'item'图形触发：散点图，饼图等无类目轴的图表中使用； 'axis'坐标轴触发；'none'：什么都不触发。
      axisPointer: { // 坐标轴指示器配置项。
        type: 'shadow', // 'line' 直线指示器  'shadow' 阴影指示器  'none' 无指示器  'cross' 十字准星指示器。
        axis: 'auto', // 指示器的坐标轴。 
        snap: true, // 坐标轴指示器是否自动吸附到点上
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: '#AFB5BA',
        }
      },
      axisLabel: {
        color: '#AFB5BA',
        fontSize: 8
      },
      /*改变y轴颜色*/
      axisLine: {
        lineStyle: {
          color: '#AFB5BA',
          width: 1, //这里是为了突出显示加上的  
        }
      },

    },

    series: [
      {
        data: [300, 320, 450, 100, 480, 600, 600],
        type: 'line',
        areaStyle: {
          normal: {
            color: '#125656' //改变区域颜色
          }
        },

        itemStyle: {
          normal: {
            color: 'red', //改变折线点的颜色
            lineStyle: {
              color: '#C7CDD1' //改变折线颜色
            }
          }
        },
      }
    ]
  };
  // 3. 把配置给实例对象
  mb.setOption(option);

  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    mb.resize();
  });


  // ---------------------------------------------------
  // 用电时段统计
  var mb1 = echarts.init(this.document.querySelector(".m_b_boxbb"));
  var option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
      nameTextStyle: {
        color: '#AFB5BA'
      },
      axisLabel: {
        color: '#AFB5BA',
        fontSize: 10
      }
    },
    yAxis:

      [{ // 纵轴标尺固定
        type: 'value',
        scale: true,
        max: 1000,
        min: 0,
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: '#8B8C8D',
          }
        },
        splitNumber: 10,
        boundaryGap: [0.2, 0.2],
        axisLabel: {
          color: '#8B8C8D',
          fontSize: 10
        }
      }],

    series: [
      {
        data: [200, 600, 560, 400, 900, 500, 400],
        type: 'line',
        itemStyle: {
          normal: {
            color: 'red', //改变折线点的颜色
            lineStyle: {
              color: '#C7CDD1' //改变折线颜色
            }
          }
        },
        areaStyle: {
          normal: {
            color: '#1C4C5D' //改变区域颜色
          }
        },
      }],
    grid: {
      top: 20,
      x: 30,
      x2: 30,
      y2: 80,
      width: '86%',
      height: '75%',
      left: 40
    }
  };
  // 3. 把配置给实例对象
  mb1.setOption(option);

  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    mb1.resize();
  });



  // -------------------------------------------------
  // 设备用电占比
  var myChart = echarts.init(this.document.querySelector("#l_m_zhutu"));
  var option = {
    grid: {
      width: '85%',
      height: "75%",
      top: 38,
      left: 40
    },
    xAxis: {
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#AFB5BA',
        fontSize: 10

      },
      type: 'category',
      data: ['照明设备', '安防设备', '通讯设备', '电器设备', '门禁设备', '其他设备'],

    },
    yAxis: {
      // y轴线
      axisLine: {
        show: true,
        lineStyle: {
          color: "#AFB5BA"
        }
      },
      interval: 100,
      // y轴刻度
      axisTick: {
        show: true
      },
      type: 'value',
      splitLine: {
        lineStyle: {
          // 修改分割线的颜色以及类型
          color: "#8B8C8D",
          type: "dashed",
          width: 1
        }
      }
    },
    series: [
      {
        data: [300, 200, 300, 800, 900, 200],
        type: 'bar',
        // 修改柱子的大小
        barWidth: 20,
        // 修改柱子的颜色
        itemStyle: {
          color: "#E74B4B"
        },
        barGap: "-20%"
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });



  // --------------------------------------------------------
  // 今日用电概况


  var chartDom = document.getElementById('l_m_line');
  var myChart = echarts.init(chartDom);
  var option;

  option = {

    grid: {
      left: '4',
      top: '17',
      bottom: '5%',
      containLabel: true,
      height: '75%',
      width: '90%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      // prettier-ignore
      axisLine: {
        show: true,
        lineStyle: {
          color: '#AFB5BA'
        }
      },
      axisLabel: {
        color: '#AFB5BA',
        fontSize: 8

      },
      data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} KW',
        fontSize: 8,
        color: '#AFB5BA'
      },
      // 坐标轴轴线配置
      axisLine: {
        show: true,
        lineStyle: {
          color: '#AFB5BA'
        }
      },
      // 坐标轴刻度配置
      axisTick: {
        show: true
      },
      axisPointer: {
        snap: true
      },
      // 分割线配置
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: '#8B8C8D'
        }
      }
    },

    visualMap: {
      show: false,
      dimension: 0,
      pieces: [
        {
          lte: 6,
          color: 'green'
        },
        {
          gt: 6,
          lte: 8,
          color: 'red'
        },
        {
          gt: 8,
          lte: 14,
          color: 'green'
        },
        {
          gt: 14,
          lte: 17,
          color: 'red'
        },
        {
          gt: 17,
          color: 'green'
        }
      ]
    },
    series: [
      {
        name: '用户电量',
        type: 'line',
        smooth: true,
        // prettier-ignore
        data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
        markArea: {
          itemStyle: {
            color: 'rgba(255, 173, 177, 0.4)',

          },

          data: [
            [
              {
                name: '早高峰',
                xAxis: '07:30'

              },
              {
                xAxis: '10:00'
              }
            ],
            [
              {
                name: '晚高峰',
                xAxis: '17:30'
              },
              {
                xAxis: '21:15'
              }
            ]
          ]
        }
      }
    ]
  };

  option && myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})

$(document).ready(function(){
   // 动态显示日期
   var dates = $(".date");
   var years = $(".year");
   // 一进入页面就开始加载时间
   getDate();
   setInterval(getDate, 1000);
 
   function getDate() {
     var SystemDate = new Date();
     // 日
     var day = SystemDate.getDate();
     day = addZero(day);
     // 月
     var month = (SystemDate.getMonth()) + 1;
     month = addZero(month);
     // 年
     var year = SystemDate.getFullYear();
     // 小时
     var hour = SystemDate.getHours();
     hour = addZero(hour);
     // 秒
     var second = SystemDate.getSeconds();
     second = addZero(second);
     // 分
     var minute = SystemDate.getMinutes();
     minute = addZero(minute);
     var one = hour + "时" + minute + "分" + second + "秒";
     var two = year + "年" + month + "月" + day + "日";
     dates.html(one);
     years.html(two);
   }
 
   function addZero(obj) {
     if (obj < 10) {
       obj = "0" + obj;
     }
     return obj;
   }
})

 


