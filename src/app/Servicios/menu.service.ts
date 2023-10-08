import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private ocultarComponente = new BehaviorSubject<boolean>(false);
  ocultarComponente$ = this.ocultarComponente.asObservable();

  cambiarVistaComponente(ocultar: boolean) {
    this.ocultarComponente.next(ocultar);
  }
}
