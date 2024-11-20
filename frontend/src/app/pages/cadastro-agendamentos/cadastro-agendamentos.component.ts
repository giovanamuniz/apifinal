import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CreateComponent } from '../../components/create/create.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-agendamentos',
  standalone: true,
  imports: [HeaderComponent, CreateComponent, PrimaryInputComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-agendamentos.component.html',
  styleUrl: './cadastro-agendamentos.component.scss'
})
export class CadastroAgendamentosComponent {
  createForm!: FormGroup;

  constructor(private router: Router) {
    this.createForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required])
      
    });
  }
  submit() {
    console.log(this.createForm.value);
  }

}
