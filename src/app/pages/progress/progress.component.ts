import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso: number = 50;

  constructor() { }

  ngOnInit() {
  }

  cambiar( numero: number ) {
    if ( this.progreso >= 100 && numero > 0) {
      this.progreso = 100;
      return false;
    }
    if ( this.progreso <= 0 && numero < 0) {
      this.progreso = 0;
      return false;
    }

    this.progreso = this.progreso +  numero;
  }

}
