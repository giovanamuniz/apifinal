import { Component } from '@angular/core';
import { ListaItemsComponent } from '../../components/lista-items/lista-items.component';

@Component({
  selector: 'app-view-profissionais',
  standalone: true,
  imports: [ListaItemsComponent],
  templateUrl: './view-profissionais.component.html',
  styleUrl: './view-profissionais.component.scss'
})
export class ViewProfissionaisComponent {

}
