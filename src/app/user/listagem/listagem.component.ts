import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem',
  imports: [ CommonModule, RouterLink ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})

export class ListagemComponent implements OnInit {
  
  users: User[] = []

  constructor(private userService: UserService){

  }
  ngOnInit(): void {
    this.carregarUser()
  }

  carregarUser(): void{
    // este .subscribe serve para esperar a requisição mandar um retorno da requisição HTTP
    this.userService.listarUser().subscribe((res) => {
      this.users = res;
    })
  }
}