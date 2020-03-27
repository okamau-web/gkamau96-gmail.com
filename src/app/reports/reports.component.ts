import { HttpClient } from '@angular/common/http';
import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  title = 'Dashboard: Kiambu County Dairy Production';
  chart;
  pie: any;
  doughnut: any;

  constructor(private event:EventService, private http:HttpClient){}

  ngOnInit() {

    this.chart = new Chart('bar', {
      type: 'bar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Combo Bar and line Chart'
        },
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [

          {
            type: 'line',
            label: 'Cash Crops',
            backgroundColor: 'rgba(0,0,255,0.4)',
            borderColor: 'blue',
            data: [243, 256, 365, 285, 296, 265, 356, 343, 256, 265, 250, 243],
            fill: true,
          },
          {
            type: 'bar',
            label: 'Milk Production',
            data: [243, 296, 365, 300, 156, 265, 356, 400, 360, 415, 350, 543],
            backgroundColor: 'coral',
            borderColor: 'rgba(255,0,255,0.4)',
            fill: false,
          },

          {
            type: 'bar',
            label: 'Other Farm Produce',
            data: [273, 156, 345, 299, 196, 365, 306, 443, 286, 165, 140, 333],
            backgroundColor: 'greenyellow',
            borderColor: 'rgba(0,0,255,0.4)',
            fill: false,
          },

        ]
      }
    });
    this.doughnut = new Chart('doughnut', {
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Doughnut Chart'
        }, legend: {
          position: 'top',
        }, animation: {
          animateScale: true,
          animateRotate: true
        }
      },
      data: {
        datasets: [{
          data: [493, 600, 256, 555, 290,],
          backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
          label: 'Dataset 1'
        }],
        labels: [
          "Milk", "Tea", "Coffee", "Poultry", "Ovacado"]
      }
    });

    this.pie = new Chart('pie', {
      type: 'pie',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Pie Chart'
        }, legend: {
          position: 'top',
        }, animation: {
          animateScale: true,
          animateRotate: true
        }
      },
      data: {
        datasets: [{
          data: [450, 350, 255, 100, 315],
          backgroundColor: ["red", "orange", "yellow", "green", "blue"],
          label: 'Dataset 1'
        }],
        labels: ["Milk", "Tea", "Coffee", "Poultry", "Ovacado"]
      }
    });
    this.pie = new Chart('horizontalBar', {
      type: 'horizontalBar',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Horizontalbar  Chart'
        }, legend: {
          position: 'right',
        }, animation: {
          animateScale: true,
          animateRotate: true
        }
      },
      data: {
        datasets: [{
          data: [450, 350, 255, 180, 315],
          backgroundColor: ["red", "orange", "yellow", "green", "blue"],
          label: ''
        }],
        labels: ["Milk", "Tea", "Coffee", "Poultry", "Ovacado"]
      }
    });

  }

}
