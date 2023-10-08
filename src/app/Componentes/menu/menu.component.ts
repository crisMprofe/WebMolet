import { Component } from '@angular/core';
import { MenuService } from 'src/app/Servicios/menu.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private menuService: MenuService) { }

  opcionSeleccionada() {
    this.menuService.cambiarVistaComponente(true);
  }
}
