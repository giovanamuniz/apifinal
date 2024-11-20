import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  mensagem: string | null = null;
  sucesso: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credenciais = this.loginForm.value;
      this.http.post<{ token: string, funcionarioId: number }>('http://localhost:4040/auth/login', credenciais).subscribe({
        next: (response) => {
          const { token, funcionarioId } = response; // Captura o token e o ID do funcionário
          console.log('Token JWT:', token);
          console.log('Funcionário ID:', funcionarioId);
          
          // Armazena o token e o ID no localStorage
          localStorage.setItem('token', token);
          localStorage.setItem('funcionarioId', String(funcionarioId));
          
          this.mensagem = 'Login realizado com sucesso!';
          this.sucesso = true;
  
          // Redireciona para a tela de perfil
          this.router.navigate(['/cards']);
        },
        error: () => {
          this.mensagem = 'Credenciais inválidas ou erro no login.';
          this.sucesso = false;
        },
      });
    }
  }
  navigate(){
    this.router.navigate(["/registrar"])
  }

  limparMensagem(): void {
    setTimeout(() => {
      this.mensagem = null;
    }, 3000); // A mensagem desaparece após 3 segundos
  }
}
