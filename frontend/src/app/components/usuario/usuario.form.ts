import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { form, FormField } from '@angular/forms/signals'

@Component({
  imports: [FormField],
  selector: 'app-usuario',
  styleUrl: './usuario.form.css',
  templateUrl: './usuario.form.html',
})

export class UsuarioForm implements OnInit {

  private route = inject(ActivatedRoute);
  private usuarioService = inject(UsuarioService);

  public idUsuario = this.route.snapshot.paramMap.get('id_usuario');
  public esEdicion = this.idUsuario !== null;

  public usuario: Usuario | undefined;

  public datosFormulario = signal({
    username:'',
    nombres:'',
    apellidos:'',
    fecha_nacimiento:''
  })

  public usuarioForm = form(this.datosFormulario);

  public ngOnInit(): void {
    if(this.esEdicion){
      this.usuario = this.usuarioService.getById(Number(this.idUsuario));
      //console.log('Usuario encontrado:', this.usuario);
      if(this.usuario !== undefined){
        this.datosFormulario.set({
          username: this.usuario.username,
          nombres: this.usuario.nombres,
          apellidos: this.usuario.apellidos,
          fecha_nacimiento: this.usuario.fecha_nacimiento
        })
      }
    }
  }
}
