import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  funcionario: { nome: string; email: string; telefone: string } | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Buscar informações do funcionário (pode ser do localStorage ou da API)
    const funcionarioId = localStorage.getItem('funcionarioId'); // Certifique-se de que o ID do funcionário está sendo salvo no localStorage
    if (funcionarioId) {
      this.http.get(`http://localhost:4040/funcionarios/${funcionarioId}`).subscribe({
        next: (data: any) => {
          this.funcionario = data; // Preenche os dados do funcionário
        },
        error: (err) => {
          console.error('Erro ao buscar informações do funcionário', err);
        }
      });
    } else {
      console.error('ID do funcionário não encontrado no localStorage');
    }
  }

  editarPerfil(): void {
    this.router.navigate(['/editar-funcionario']); // Rota para editar o perfil
  }
}
