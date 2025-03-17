import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarComponent } from './pages/editar/editar.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Protegendo a Home
    { path: 'home', component: HomeComponent }, // Protegendo a Home
    { path: 'cadastro', component: CadastroComponent}, // Protegendo Cadastro
    { path: 'editar/:id', component: EditarComponent }, // Protegendo Edição
    { path: '**', redirectTo: '/' } // Redireciona qualquer rota inválida para a Home
];
