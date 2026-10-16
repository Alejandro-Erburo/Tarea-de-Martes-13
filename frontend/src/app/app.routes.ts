import { Routes } from '@angular/router';
import { UsuariosPage } from './pages/usuarios/usuarios.page'
import { UsuarioForm } from './components/usuario/usuario.form';

export const routes: Routes = [
    {
        path: 'usuarios',
        component: UsuariosPage
    },
    {
        path: 'usuarios/crear',
        component: UsuarioForm
    },
    {
        path: 'usuarios/:id_usuario',
        component: UsuarioForm
    }
];
