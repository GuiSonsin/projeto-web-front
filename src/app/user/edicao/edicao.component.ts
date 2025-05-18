import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-edicao',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css'
})

export class EdicaoComponent implements OnInit {

  user: User = {
    document: '',
    name: '',
    lastName: '',
    password: '',
    phone: '', 
    email: '',
    isActive: true
  };

  private document!: string;

  constructor( private route: ActivatedRoute, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
      this.document = String(this.route.snapshot.paramMap.get('id'));
      this.carregarUser();
  }

  carregarUser(): void {
    
    if(!this.document){
      this.router.navigate(['/listagem']);
      return
    }

    this.userService.buscarUser(this.document).subscribe((a) => {
      this.user = a;
    });
  }

  salvar(): void {
    if(!this.user){
      return
    }

    this.userService.atualizarUser(this.document, this.user).subscribe(() => {
      this.router.navigate(['/listagem'])
    })
  }

  cancelar(): void {
    this.router.navigate(['/listagem']);
  }
}