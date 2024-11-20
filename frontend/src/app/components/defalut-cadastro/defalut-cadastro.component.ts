import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-defalut-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './defalut-cadastro.component.html',
  styleUrl: './defalut-cadastro.component.scss'
})
export class DefalutCadastroComponent {
  constructor(
    private router: Router
  ){
   
  }
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
  @Input() thirdBtnText: string = "";
  @Input() spanText: string = "";
  @Input() primaryText: string = "";
  @Input() secondaryText: string = "";
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();
  

  submit(){
    this.onSubmit.emit();
  }

  navigate(){
    this.router.navigate(["/cards"])
  }
  navigate2(){
    this.router.navigate(["/login"])
  }
}
