import { Component } from '@angular/core';
import { ListaItemsComponent } from '../../components/lista-items/lista-items.component';


@Component({
  selector: 'app-view-agendamentos',
  standalone: true,
  imports: [ListaItemsComponent],
  templateUrl: './view-agendamentos.component.html',
  styleUrl: './view-agendamentos.component.scss'
})
export class ViewAgendamentosComponent {

}
