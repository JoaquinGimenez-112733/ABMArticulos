import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Articulo } from '../interfaces/articulo';
import { Categoria } from '../interfaces/categoria';
import { ArticulosService } from '../services/articulos.service';
import { CategoriaService } from '../services/categoria.service';
declare var window : any;
@Component({
  selector: 'app-art-mod',
  templateUrl: './art-mod.component.html',
  styleUrls: ['./art-mod.component.css']
})
export class ArtModComponent implements OnInit, OnChanges {
  @Input() idMod :string = ""
  @Input() flagModalMod :boolean = false
  @Output() onModificar = new EventEmitter()
  formModal:any
  flagModal:boolean = false

  private subs = new Subscription()
  articulo = {} as Articulo
  categorias : Categoria[] = []
  constructor(private catService:CategoriaService, private artService: ArticulosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal2")
    )

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.flagModalMod){
      this.formModal.show()
    }

    this.subs.add(
      this.catService.obtenerTodas().subscribe({
        next: (respuesta: Categoria[]) => {
          this.categorias = respuesta;
          this.cargarArticulo();
        },
        error: () => {
          alert('error al obtener las categorias');
        },
      })
    );
  }
  cerrarSalvar(){
    this.subs.add(
      this.artService.modificar(this.articulo).subscribe({
        next:()=>{
          this.onModificar.emit()
          alert("Articulo Modificado exitosamente!")
          this.articulo = {} as Articulo
        },
        error:()=>{
          console.log(this.articulo)
          alert("No se pudo modificar el articulo...")
        }
      })
    )

  }

  cerrarModal(){
    this.onModificar.emit()
    this.flagModal = false
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

  abrirModal(){
    this.formModal.show()
  }

  private cargarArticulo() {
    this.subs.add(
     
          this.artService.obtenerPorID(this.idMod).subscribe({
            next: (respuesta: Articulo) => {
              console.log(this.idMod)
              this.articulo = respuesta;
            },
            error: () => {
              alert('error al obtener el articulo');
            },
          })
        
      
    );
  }
}
