import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CreateComponent } from "../../components/create/create.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-profissionais',
  standalone: true,
  imports: [ReactiveFormsModule,
    HeaderComponent, CreateComponent, PrimaryInputComponent, CommonModule],
  templateUrl: './cadastro-profissionais.component.html',
  styleUrl: './cadastro-profissionais.component.scss'
})
export class CadastroProfissionaisComponent {
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
      state: new FormControl('', [Validators.required])
      
    });
  }
  submit() {
    console.log(this.createForm.value);
  }

}
