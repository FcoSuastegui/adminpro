import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard/' },
        { titulo: 'ProgressBar', url: '/dashboard/progress' },
        { titulo: 'Graficas', url: '/dashboard/graficas1' },
      ]
    }
  ];

  constructor() { }
}
