import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";
import { Router } from '@angular/router';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { CreateComponent } from "../../components/create/create.component";
import { CommonModule } from '@angular/common';
import { PacienteService } from '../../services/paciente.service';


@Component({
  selector: 'app-cadastro-paciente',
  standalone: true,
  imports: [ReactiveFormsModule,
    HeaderComponent, CreateComponent, PrimaryInputComponent, CommonModule],
  templateUrl: './cadastro-paciente.component.html',
  styleUrl: './cadastro-paciente.component.scss'
})
export class CadastroPacienteComponent {
  createForm!: FormGroup;
  

  constructor(private pacienteService: PacienteService, private router: Router) {
    this.createForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      guardian: new FormControl('', [Validators.required]),
      guardianphone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      hospital_id: new FormControl ('', [Validators.required]), // Adicionado
      medico_id: new FormControl ('', [Validators.required])  // Adicionado
      
    });
  }
  submit() {
    if (this.createForm.valid) {
      this.pacienteService.cadastrarPaciente(this.createForm.value).subscribe({
        next: (response) => {
          console.log('Paciente cadastrado com sucesso:', response);
          this.router.navigate(['/listapacientes']); // Redireciona para a lista
        },
        error: (error) => {
          console.error('Erro ao cadastrar paciente:', error);
        },
      });
    } else {
      console.log('Formulário inválido!');
    }
  }
  
}