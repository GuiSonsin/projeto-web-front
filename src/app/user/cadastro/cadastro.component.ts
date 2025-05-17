import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  user: User= {
    document: '',
    name: '',
    lastName: '',
    password: '',
    phone: '', 
    email: '',
    isActive: true
  };

  constructor(private userService: UserService, private router: Router){
    
  }

  salvar(){
    this.userService.cadastrarUser(this.user).subscribe(() => {
      this.router.navigate(['/listagem'])
    });
  }
}
