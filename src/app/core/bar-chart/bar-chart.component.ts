import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.sass']
})
export class BarChartComponent implements OnInit {

  constructor() { }
  public barChartOptions = {
    maintainAspectRatio: false,
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            fontSize: 12,
            fontFamily: 'Poppins',
            color: '#323C47',
            stepSize: 50,
          },
          gridLines: {
            borderDash: [10, 10],
            color: '#C4C4C4',
            lineWidth: 2
          }
        }
      ],
      xAxes: [
        {
          barPercentage: 0.7,
          // barThickness: 6,
          // maxBarThickness: 8,
          // minBarLength: 2,
          display: true,
          ticks: {
            fontSize: 12,
            fontFamily: 'Poppins',
            color: '#323C47',
          },
          gridLines: {
            display: false
          }
        }
      ],
    },

  };
  public barChartLabels = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartData = [
    { data: [65, 160, 195, 242, 26, 15], backgroundColor: '#00C537', hoverBackgroundColor: '#00C537', label: 'Series a', stack: 'a', },
    { data: [25, 63], backgroundColor: '#0047FF', hoverBackgroundColor: '#0047FF', label: 'Series b', stack: 'a' },
    { data: [0, 0, 15, 19, 22, 27, 90, 28, 248, 140, 185, 126], backgroundColor: '#FF0000', hoverBackgroundColor: 'FF0000', label: 'Series c', stack: 'a' },
    { data: [0, 0, 0, 0, 0, 27, 22, 13], backgroundColor: '#FFD600', hoverBackgroundColor: '#FFD600', label: 'Series d', stack: 'a' }
  ];
  ngOnInit() {
  }
}
