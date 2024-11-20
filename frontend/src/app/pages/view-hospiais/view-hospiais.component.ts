import { Component } from '@angular/core';
import { ListaItemsComponent } from '../../components/lista-items/lista-items.component';

@Component({
  selector: 'app-view-hospiais',
  standalone: true,
  imports: [ListaItemsComponent],
  templateUrl: './view-hospiais.component.html',
  styleUrl: './view-hospiais.component.scss'
})
export class ViewHospiaisComponent {

}
