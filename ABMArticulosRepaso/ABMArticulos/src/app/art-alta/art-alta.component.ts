import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { Articulo } from '../interfaces/articulo';
import { Categoria } from '../interfaces/categoria';
import { ArticulosService } from '../services/articulos.service';
import { CategoriaService } from '../services/categoria.service';
declare var window:any;
@Component({
  selector: 'app-art-alta',
  templateUrl: './art-alta.component.html',
  styleUrls: ['./art-alta.component.css']
})
export class ArtAltaComponent implements OnInit, OnChanges {
  @Input()  flagModal:boolean = false
  @Output() onNuevoArticulo = new EventEmitter()
  formModal:any;

  articulo = {} as Articulo;
  categorias : Categoria[] = []

  private subs = new Subscription();
  constructor(private catService:CategoriaService, private artService:ArticulosService) { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    )

      this.obtenerCategorias()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.flagModal){
      this.formModal.show()
    }
  }

  cerrarSalvar(){
    this.subs.add(
      this.artService.alta(this.articulo).subscribe({
        next:()=>{
          this.onNuevoArticulo.emit()
          alert("Articulo Registrado exitosamente!")
          this.articulo = {} as Articulo
        },
        error:()=>{
          alert("No se pudo registrar el articulo...")
        }
      })
    )

  }

  cerrarModal(){
    this.onNuevoArticulo.emit()
    this.formModal.hide()
  }

obtenerCategorias(){
  this.subs.add(
    this.catService.obtenerTodas().subscribe({
      next:(cats:Categoria[])=>{
        this.categorias = cats
      }
    })
  )
}
}
