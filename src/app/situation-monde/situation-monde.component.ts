import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-situation-monde',
  templateUrl: './situation-monde.component.html',
  styleUrls: ['./situation-monde.component.css']
})
export class SituationMondeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.buildChart();
  }

  buildChart() {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Personnes testées', 'Personnes hospitalisées', 'Cas confirmés', 'Personnes Guéries', 'Nombre de mort'],
        datasets: [{
          label: '# stat',
          data: [20, 10, 8, 5, 2, 3],
          backgroundColor: [
            'tea',
            'blue',
            'orange',
            'green',
            'red'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
