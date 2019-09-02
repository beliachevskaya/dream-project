import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.sass']
})
export class DoughnutChartComponent implements OnInit {
  public doughnutChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {},
    cutoutPercentage: 85,
    legend: {
      position: 'right',
      display: true,
      labels: {
        fontColor: '#192A3E',
        fontSize: 10,
        fontFamily: 'Poppins',
        boxWidth: 10,
      }
    }
  };

  public doughnutChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public doughnutChartData = [{
    data: [30, 10, 13, 45],
    backgroundColor: ['#FFD600', '#9E00FF', '#FF0000', '#0047FF'],
    fill: false,
    // cutoutPercentage: 20
  },
  ];
  public doughnutChartType = 'doughnut';

  constructor() { }
  ngOnInit() {
  }
}
