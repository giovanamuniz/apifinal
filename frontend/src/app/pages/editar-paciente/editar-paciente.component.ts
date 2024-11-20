import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { CreateComponent } from "../../components/create/create.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';

@Component({
  standalone: true,
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.scss'],
  imports: [ReactiveFormsModule, CreateComponent, HeaderComponent, PrimaryInputComponent],
})
export class EditarPacienteComponent implements OnInit {
  createForm!: FormGroup; // Reutilizando o mesmo formulário do cadastro
  pacienteId!: number; // ID do paciente a ser editado (tipo ajustado para number)

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService
  ) { }

  ngOnInit(): void {
    this.initForm(); // Inicializa o formulário
    this.route.params.subscribe(params => {
      this.pacienteId = Number(params['id']); // Converte para número
      this.carregarDadosPaciente();
    });
  }

  // Inicializa o formulário com os campos
  initForm(): void {
    this.createForm = this.fb.group({
      name: [''],
      hospital_id: [''],
      medico_id: [''],
      cpf: [''],
      gender: [''],
      birthdate: [''],
      phone: [''],
      guardian: [''],
      guardianphone: [''],
      address: [''],
      postalCode: [''],
      city: [''],
      state: [''],
    });
  }

  // Carrega os dados do paciente e os preenche no formulário
  carregarDadosPaciente(): void {
    this.pacienteService.buscarPaciente(this.pacienteId).subscribe(
      (paciente) => {
        this.createForm.patchValue(paciente); // Preenche o formulário com os dados do paciente
      },
      (error) => console.error('Erro ao carregar paciente', error)
    );
  }

  // Submete os dados para salvar as alterações
  salvar(): void {
    if (this.createForm.valid) {
      this.pacienteService.atualizarPaciente(this.pacienteId, this.createForm.value).subscribe(
        (response) => {
          console.log('Paciente atualizado com sucesso!', response);
          this.router.navigate(['/listapacientes']);
        },
        (error) => {
          console.error('Erro ao atualizar paciente', error);
        }
      );
    }
  }
}
