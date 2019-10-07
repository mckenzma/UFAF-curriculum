import React, { Component } from "react";
import Chart from "react-apexcharts";

class StackedBarChartNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: 350,
          type: "bar",
          stacked: true
        },
        //setting colors for series
        colors: [
          "#2E93fA",
          "#66DA26",
          "#546E7A",
          "#E91E63",
          "#FF9800",
          "#bbb",
          "#aaa",
          "#123456"
        ],
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        series: [
          {
            name: "Traditional Techniques",
            data: [44, 55, 41, 37, 22, 43, 21]
          },
          {
            name: "Kicks",
            data: [53, 32, 33, 52, 13, 43, 32]
          },
          {
            name: "Katas",
            data: [12, 17, 11, 9, 15, 11, 20]
          },
          {
            name: "Self Defense",
            data: [9, 7, 5, 8, 6, 9, 4]
          },
          {
            name: "Sparring Techniques",
            data: [25, 12, 19, 32, 25, 24, 10]
          }
        ],
        title: {
          text: "Curriculum Breakdown (New Techniques by Rank)"
        },
        xaxis: {
          categories: [
            "Black Belt",
            "Red Belt",
            "Green Belt",
            "Blue Belt",
            "Orange/Purple",
            "Yellow Belt",
            "White Belt"
          ],
          labels: {
            formatter: function(val) {
              return val /*+ "K"*/;
            }
          }
        },
        yaxis: {
          title: {
            text: undefined
          }
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return val /*+ "K"*/;
            }
          }
        },
        fill: {
          opacity: 1
        },

        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: 40
        }
      }
    };
  }

  render() {
    return (
      <div className="bar">
        <Chart
          options={this.state.options}
          series={this.state.options.series}
          type="bar"
          // width="380"
        />
      </div>
    );
  }
}

export default StackedBarChartNew;
