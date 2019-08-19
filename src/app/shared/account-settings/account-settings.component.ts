import { Component, OnInit, Inject, ɵConsole  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor( @Inject(DOCUMENT) public _document, private setting: SettingsService) {  }

  ngOnInit() {
    const temas = document.getElementById('themecolors');
    temas.addEventListener('click', (e) => {
      // tslint:disable-next-line: no-string-literal
      if (e.target['dataset'].theme) {

        const selectores = this._document.getElementsByClassName('selectores');
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < selectores.length; index++) {
          const element = selectores[index];
          // tslint:disable-next-line: no-string-literal
          if ( element['classList'].contains('working')) {
            // tslint:disable-next-line: no-string-literal
              element['classList'].remove('working');
          }
        }
        // tslint:disable-next-line: no-string-literal
        e.target['classList'].add('working');

        // tslint:disable-next-line: no-string-literal
        const tema = e.target['dataset'].theme;
        this.setting.applyTheme(tema);
      }
    });
    this.setCheck();

  }

  setCheck( ) {
    const selectores = this._document.getElementsByClassName('selectores');
    const theme = this.setting.settings.theme;
    // console.log(selectores);
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < selectores.length; index++) {
      const element = selectores[index];
      // tslint:disable-next-line: no-string-literal
      element['classList'].remove('working');
      // tslint:disable-next-line: no-string-literal
      if ( element['dataset'].theme === theme ) {
        // tslint:disable-next-line: no-string-literal
        element['classList'].add('working');
      }
    }
  }

}
