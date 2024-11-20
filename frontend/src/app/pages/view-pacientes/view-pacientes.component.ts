import { Component, OnInit } from '@angular/core';
import { ListaItemsComponent } from '../../components/lista-items/lista-items.component';
import { PacienteService } from '../../services/paciente.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-view-pacientes',
  templateUrl: './view-pacientes.component.html',
  imports: [ListaItemsComponent, CommonModule, FormsModule],
})
export class ViewPacientesComponent implements OnInit {
  pacientes: any[] = []; // Armazena os pacientes

  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
    this.carregarPacientes();
  }

  carregarPacientes() {
    this.pacienteService.buscarPacientes().subscribe({
      next: (data) => {
        this.pacientes = data;
      },
      error: (error) => {
        console.error('Erro ao buscar pacientes:', error);
      }
    });
  }
  excluirPaciente(id: number) {
    if (confirm('Tem certeza de que deseja excluir este paciente?')) {
      this.pacienteService.deletarPaciente(id).subscribe({
        next: () => {
          alert('Paciente excluído com sucesso!');
          this.carregarPacientes(); // Atualiza a lista após a exclusão
        },
        error: (error) => {
          console.error('Erro ao excluir paciente:', error);
          alert('Não foi possível excluir o paciente. Tente novamente mais tarde.');
        }
      });
    }
  }
  pacienteParaEditar: any = null;

abrirModalEdicao(paciente: any) {
  this.pacienteParaEditar = { ...paciente }; // Clona os dados do paciente
}

fecharModal() {
  this.pacienteParaEditar = null;
}

salvarEdicao() {
  if (this.pacienteParaEditar) {
    this.pacienteService
      .atualizarPaciente(this.pacienteParaEditar.id, this.pacienteParaEditar)
      .subscribe({
        next: () => {
          alert('Paciente atualizado com sucesso!');
          this.carregarPacientes(); // Atualiza a lista de pacientes
          this.fecharModal(); // Fecha o modal
        },
        error: (err) => {
          console.error('Erro ao atualizar paciente:', err);
          alert('Erro ao atualizar paciente. Tente novamente mais tarde.');
        }
      });
  }
}

 
}
