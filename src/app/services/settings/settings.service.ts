import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    themeUrl: './assets/css/colors/default-dark.css',
    theme: 'default-dark'
  };
  // tslint:disable-next-line: variable-name
  constructor(@Inject(DOCUMENT) public _document) { this.getSettings(); }

  saveSettings( ) {
    localStorage.setItem('settings', JSON.stringify(this.settings));
    // console.log('Guardando en el localstorage');
  }

  getSettings( ) {
    if ( localStorage.getItem('settings') ) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
      // console.log('Cargando el tema guardado');
      this.applyTheme(this.settings.theme);
    } else {
      // console.log('Cargando los valores por defecto');
      this.applyTheme(this.settings.theme);
    }
  }

  applyTheme( theme: string ) {

    const url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
    this.settings.theme = theme;
    this.settings.themeUrl = url;
    this.saveSettings();
  }





}

interface Settings {
  themeUrl: string;
  theme: string;
}
