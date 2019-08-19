import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() graficos: object = null;

  leyendas: any [] = [];

 // Doughnut
 public doughnutChartLabels: Label[] = [];
 public doughnutChartData: MultiDataSet = [];
 public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: forin
    for (const grafico in this.graficos) {
      this.doughnutChartLabels.push(this.graficos[grafico].labels);
      this.doughnutChartData.push(this.graficos[grafico].data);
      this.leyendas.push(this.graficos[grafico].leyenda);
    }
  }

}
