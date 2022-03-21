import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
    
  LISTA_USUARIOS: Usuario[] = []
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private usuarioService: UsuarioService,
              private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.ObtenerUsuarios();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ObtenerUsuarios() {
    this.LISTA_USUARIOS = this.usuarioService.getUsuarios();
    this.dataSource = new MatTableDataSource(this.LISTA_USUARIOS);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(i: number) {
    // Llamada al servicio
    this.usuarioService.eliminarUsuario(i);
    // Refrescar Lista de usuarios
    this.ObtenerUsuarios();
    // Mostrar mensaje
    this._snackBar.open('Usuario eliminado con exito', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

}
