import { Component } from '@angular/core';
import { MenuService } from 'src/app/Servicios/menu.service';
@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  ocultarComponente: boolean = false;

  constructor(private menuService: MenuService) {
    this.menuService.ocultarComponente$.subscribe(ocultar => {
      this.ocultarComponente = ocultar;
    });
  }
}
