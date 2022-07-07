// ------JavaScript  折线图+柱形图------------------------------------------------------------------------
window.addEventListener("load", function () {
    // ------------------------------------------------------
    //TODO 折线图
    var chenyan1 = echarts.init(document.querySelector(".l_a_zxt"));
    var option = {
        // 通过这个color修改两条线的颜色 
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: "axis"
        },
        // 图例组件 
        legend: {
            // 修改图例组件 文字颜色 
            textStyle: {
                color: "#4c9bfd"
            },
            // 图例组件离容器右侧的距离。-----这个10% 必须加引号 
            right: "10%"
        },

        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true, // 显示边框 
            borderColor: "#012f4a", // 边框颜色
            containLabel: true // 包含刻度文字在内 
        },

        xAxis: {
            type: "category",
            //坐标轴两边留白策略
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            //坐标轴刻度相关设置。 

            axisTick: {
                show: false
                // 去除刻度线
            },
            //坐标轴刻度标签的相关设置。
            axisLabel: {
                color: "#4c9bfd" // 文本颜色 
            },
            //坐标轴轴线相关设置 
            axisLine: {
                show: false // 去除轴线
            }
        },

        yAxis: {
            type: "value",
            axisTick: {
                show: false // 去除刻度线 
            },
            axisLabel: {
                color: "#4c9bfd" // 文本颜色 
            },
            axisLine: {
                show: false // 去除轴线
            },
            splitLine: {
                lineStyle: {
                    color: "#012f4a" // 分割线颜色
                }
            }
        },

        series: [
            {
                name: "最高气温",
                type: "line",
                //是否平滑曲线显示--- true 可以让我们的折线显示带有弧度 
                smooth: true,
                data: [30, 31, 35, 32, 37, 38, 40, 41, 38, 36, 32, 27]
            },
            {
                name: "最低气温",
                type: "line",
                smooth: true,
                data: [25, 25, 27, 20, 32, 33, 35, 32, 32, 30, 28, 23]
            }
        ]

    };
    //指定图表的配置项和数据

    // 3. 把配置给实例对象
    chenyan1.setOption(option);

    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        chenyan1.resize();
    });

    // ------------------------------------------------------
    //TODO 柱形图
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var chenyan2 = echarts.init(document.querySelector(".l_a_tjt"));

    var option = {
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"

            // containLabel: true 
        },
        // 不显示x轴的相关信息 
        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: "category",
                // 类目反转 
                inverse: true,
                data: ["管理人员", "业务人员", "财务人员", "服务人员", "技术人员"],
                // 不显示y轴的线 
                axisLine: {
                    show: false
                },
                // 不显示刻度 
                axisTick: {
                    show: false
                },
                // 把刻度标签里面的文字颜色设置为白色 
                axisLabel: {
                    color: "#fff"
                }
            },
            {
                data: [702, 350, 610, 793, 664],
                inverse: true,
                // 不显示y轴的线 
                axisLine: {
                    show: false
                },
                // 不显示刻度 
                axisTick: {
                    show: false
                },
                // 把刻度标签里面的文字颜色设置为白色 
                axisLabel: {
                    color: "#fff"
                }
            }
        ],
        series: [
            {
                name: "条",
                type: "bar",
                data: [70, 34, 60, 78, 69],
                //使用的 y 轴的 index 
                yAxisIndex: 0,
                //图形样式--- 修改第一组柱子的圆角 
                itemStyle: {
                    //圆角半径 
                    borderRadius: 20,
                    // 此时的color 可以修改柱子的颜色 
                    color: function (params) {
                        // params 传进来的是柱子对象 
                        // console.log(params); 
                        // dataIndex 是当前柱子的索引号 
                        return myColor[params.dataIndex];
                    }
                },
                // 柱子之间的距离 
                barCategoryGap: 50,
                //柱子的宽度 
                barWidth: 10,
                // 显示柱子内的文字 
                label: {
                    show: true,
                    position: "inside",
                    // {c} 会自动的解析为 数据 data里面的数据 
                    formatter: "{c}%"
                }
            },
            {
                name: "框",
                type: "bar",
                barCategoryGap: 50,
                barWidth: 15,
                yAxisIndex: 1,
                data: [100, 100, 100, 100, 100],
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                }
            }
        ]
    };

    // 3. 把配置给实例对象
    chenyan2.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        chenyan2.resize();
    });

});

// ----jquery  饼状图---------------------------------------------------------------------------

(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('l_m_tu'));
    // 指定图表的配置项和数据
    option = {
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: '入驻企业',
                type: 'pie',
                radius: ['10%', '60%'],
                color: ['#9689ff', '#ff8a26', '#4ed33c', '#dd5050'],
                label: { fontSize: 13 },
                data: [
                    { value: 135, name: '有限责任公司', label: { color: "#9689ff" } },
                    { value: 102, name: '股份有限公司', label: { color: "#ff8a26" } },
                    { value: 78, name: '个人独资公司', label: { color: "#4ed33c" } },
                    { value: 45, name: '合资企业', label: { color: "#dd5050" } }
                ],
                label: {
                    fontSize: 9,
                },
                //高亮状态的扇区和标签样式。
                emphasis: {
                    itemStyle: {
                        //图形阴影的模糊大小
                        shadowBlur: 10,
                        //阴影水平方向上的偏移距离
                        shadowOffsetX: 0,
                        //阴影颜色
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



// ----jquery  ---------------------------------------------------------------------------
(function () {

    // 新闻跑马灯效果
    $(function(){
        $('.m_b_box2,.r_b_climate').liMarquee({
            direction: 'up',
            scrollamount:20
        });
        $('.m_b_box2,.r_b_climate').css('background','none')
    });
})();