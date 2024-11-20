import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-lista-items',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.scss']
})
export class ListaItemsComponent {
  constructor(private router: Router){

  }
  @Input() placeholderText: string = '';
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() primeiroAtributo: string = "";
  @Input() segundoAtributo: string = "";
  @Input() terceiroAtributo: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() routePath: string = '';
  @Input() firstFilter: string = "";
  @Output("navigate") onNavigate = new EventEmitter();
  @Output() excluir = new EventEmitter<number>();
  @Output() editar = new EventEmitter<any>();
  @Input() dados: any[] = [];

  
  navigate() {
    if (this.routePath) {
      this.router.navigate([this.routePath]); 
    }
  }
  editarPaciente(id: string) {
    this.router.navigate([`/editar-paciente/${id}`]);
  }
  
}
