import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtprogreso', {static: false}) txtprogreso: ElementRef;

  @Input('titulo') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() actualizar: EventEmitter<number> =  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  OnChanges( numero: number ) {
    if ( numero >= 100 ) {
      this.progreso = 100;
    } else if ( numero <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = numero;
    }

    // const elemHTML: any = document.getElementsByName('progreso')[0];
    // elemHTML.value = Number(this.progreso);

    this.txtprogreso.nativeElement.value = Number(this.progreso);

    this.actualizar.emit(this.progreso);
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
    this.actualizar.emit(this.progreso);
  }

}
