import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Articulo } from '../interfaces/articulo';
import { Categoria } from '../interfaces/categoria';
import { ArticulosService } from '../services/articulos.service';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-art-listado',
  templateUrl: './art-listado.component.html',
  styleUrls: ['./art-listado.component.css']
})
export class ArtListadoComponent implements OnInit, OnDestroy {

  private subs = new Subscription();
  
  listado : Articulo[] = []
  idMod:string = ""

  flagModal:boolean = false
  flagModalMod:boolean = false
  constructor(private artService:ArticulosService, private categoriaService:CategoriaService, private route:Router) { }

  ngOnInit(): void {
    this.actualizarListado()
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }


  actualizarListado() {
    this.flagModal = false
    this.flagModalMod = false
    this.subs.add(
      this.categoriaService.obtenerTodas().subscribe({
        next: (categorias: Categoria[]) => {
          this.artService.obtenerTodos().subscribe({
            next: (respuesta: Articulo[]) => {
              for (const articulo of respuesta) {
                const categoriaIndex = categorias.findIndex(
                  (x) => x.id === articulo.categoriaId
                );
                articulo.categoria = categorias[categoriaIndex];
              }

              this.listado = respuesta;
            },
            error: () => {
              alert('error al comunicarse con la API');
            },
          });
        },
      })
    );
  }

  activarModal(){
    this.flagModal = true;
  }
  activarModalMod(id:string){
    this.idMod = id
    this.route.navigate(['modificar', id]);
    this.flagModalMod = true;
  }
}
