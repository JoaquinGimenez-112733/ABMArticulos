import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-art-baja',
  templateUrl: './art-baja.component.html',
  styleUrls: ['./art-baja.component.css']
})
export class ArtBajaComponent implements OnInit, OnDestroy {

  @Input() id:string = ""
  @Output() onEliminar = new EventEmitter()

  private subs = new Subscription()
  constructor(private artService:ArticulosService) { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  eliminar(){
    const result :boolean = confirm("Esta Seguro que desea eliminar este registro?")
    if(result){
    this.subs.add(
      this.artService.baja(this.id).subscribe({
        next:()=>{
          this.onEliminar.emit()
          alert("ID " + this.id + " borrado exitosamente")
        },
        error:()=>{
          alert("No se pudo borrar")
        }
      })
    )
  }}
}
