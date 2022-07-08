window.addEventListener("load", function () {
  // ---------------------------------
  // pm2.5
  var myChart = echarts.init(this.document.querySelector(".pm_pic"));
  var option = {
    grid: {
      width: '88%',
      height: '56%',
      top: 26
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['6/20', '6/21', '6/22', '6/23', '6/24', '6/25', '6/26', '6/27', '6/28', '6/29', '6/30', '6/31'],
      axisLabel: {
        color: "#8B8C8D"
      }
    },
    yAxis: {
      type: 'value',
      scale: true,
      max: 30,
      min: 0,
      splitLine: {
        show: true,
        // 虚线
        lineStyle: {
          type: 'dashed',
          color: '#6B6C70',
        }
      },
      axisLabel: {
        color: "#8B8C8D"
      },

      /*改变y轴颜色*/
      axisLine: {
        lineStyle: {
          show: true,
          color: '#52555C',
          width: 1, //这里是为了突出显示加上的  
        }
      },
    },
    series: [
      {
        data: [5, 7, 10, 10, 15, 20, 10, 20, 15, 5, 6, 10],
        type: 'line',
        areaStyle: {
          normal: {
            color: '#076C30' //改变区域颜色
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
  myChart.setOption(option);

  // ---------------------------------
  // 温度信息
  var myChart1 = echarts.init(this.document.querySelector(".climate_pic"));
  var option = {
    grid: {
      width: '100%',
      height: '70%',
      top: 30,
      left: 30

    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['6/20', '6/21', '6/22', '6/23', '6/24', '6/25', '6/26', '6/27', '6/28', '6/29', '6/30', '6/31'],
      axisLabel: {
        color: "#8B8C8D"
      }
    },
    yAxis: {
      type: 'value',
      scale: true,
      max: 50,
      min: 0,
      splitLine: {
        show: true,
        // 虚线
        lineStyle: {
          type: 'dashed',
          color: '#8B8C8D',
        }
      },

      /*改变y轴颜色*/
      axisLine: {
        show: true,
        lineStyle: {
          color: '#8B8C8D',
          width: 1, //这里是为了突出显示加上的  
        }
      },
      axisLabel: {
        color: "#8B8C8D"
      }
    },
    series: [
      {
        data: [22, 21, 25, 22, 21, 25, 30, 35, 30, 30, 35, 30],
        type: 'line',
        areaStyle: {
          normal: {//渐变
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                { offset: 0, color: '#642830' },
                { offset: 0.5, color: '#996916' },
                { offset: 1, color: '#ddd' }
              ]
            )
          }
        },

        itemStyle: {
          normal: {
            color: 'white', //改变折线点的颜色
            lineStyle: {
              color: 'red' //改变折线颜色
            }
          }
        },
      }
    ]
  };
  myChart1.setOption(option);


  // ---------------------------------
  // 湿度信息
  var myChart2 = echarts.init(this.document.querySelector(".sd_pic"));
  var option = {
    grid: {
      width: '100%',
      height: '70%',
      top: 30,
      left: 30

    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['6/20', '6/21', '6/22', '6/23', '6/24', '6/25', '6/26', '6/27', '6/28', '6/29', '6/30', '6/31'],
      axisLabel: {
        color: "#8B8C8D"
      }
    },
    yAxis: {
      type: 'value',
      scale: true,
      max: 100,
      min: 0,
      splitLine: {
        show: true,
        // 虚线
        lineStyle: {
          type: 'dashed',
          color: '#6B6C70',
        }
      },
      axisLabel: {
        color: "#8B8C8D"
      },
      /*改变y轴颜色*/
      axisLine: {
        lineStyle: {
          show: true,
          color: '#52555C',
          width: 1, //这里是为了突出显示加上的  
        }
      },
    },
    series: [
      {
        data: [22, 21, 30, 50, 55, 34, 30, 30, 50, 56, 32, 30],
        type: 'line',
        areaStyle: {
          normal: {
            color: '#164945' //改变区域颜色
          }
        },

        itemStyle: {
          normal: {
            color: 'red', //改变折线点的颜色
            lineStyle: {
              color: '#9BAEAF' //改变折线颜色
            }
          }
        },
      }
    ]
  };
  myChart2.setOption(option);


  // ---------------------------------
  // 风速情况
  var myChart3 = echarts.init(this.document.querySelector(".fs_pic"));
  var option = {
    grid: {
      width: '100%',
      height: '70%',
      top: 30,
      left: 30

    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['6/20', '6/21', '6/22', '6/23', '6/24', '6/25', '6/26', '6/27', '6/28', '6/29', '6/30', '6/31'],
      axisLine: {
        lineStyle: {
          color: "#8B8C8D"
        }
      }
    },
    yAxis: {
      type: 'value',
      scale: true,
      max: 30,
      min: 0,
      splitLine: {
        show: true,
        // 虚线
        lineStyle: {
          type: 'dashed',
          color: '#6B6C70',
        }
      },

      /*改变y轴颜色*/
      axisLine: {
        lineStyle: {
          show: true,
          color: '#8B8C8D',
          width: 1, //这里是为了突出显示加上的  
        }
      },
    },
    series: [
      {
        data: [5, 7, 10, 10, 15, 20, 10, 20, 15, 5, 6, 10],
        type: 'line',
        areaStyle: {
          normal: {
            color: '#453C0E' //改变区域颜色
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
  myChart3.setOption(option);

});

// 环境质量走马灯


$(function () {
  $('.r_b_climate').liMarquee({
    direction: 'up',
    scrollamount: 20
  });
  $('.r_b_climate').css('background', 'none');
});
