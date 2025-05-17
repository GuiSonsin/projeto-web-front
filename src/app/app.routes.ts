import { Routes } from '@angular/router';
import { ListagemComponent } from './user/listagem/listagem.component';
import { CadastroComponent } from './user/cadastro/cadastro.component';
import { EdicaoComponent } from './user/edicao/edicao.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'listagem',
        pathMatch: 'full'
    },

    { 
        path: 'listagem',
        component: ListagemComponent 
    },

    {
        path: 'cadastro',
        component: CadastroComponent
    },

    {
        path: 'edicao/:id',
        component: EdicaoComponent
    }
];
