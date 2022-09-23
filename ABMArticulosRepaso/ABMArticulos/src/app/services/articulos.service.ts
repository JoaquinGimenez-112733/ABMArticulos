import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'
import { Articulo } from '../interfaces/articulo';
@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private RECURSO: string = 'articulo/';
  private apiURL: string = `${environment.apiURLBase}${this.RECURSO}`;
  
  constructor(private _http:HttpClient) { }

  obtenerTodos(): Observable<Articulo[]> {
    return this._http.get<Articulo[]>(this.apiURL);
  }

  obtenerPorID(codigo:string):Observable<Articulo>{
    return this._http.get<Articulo>(this.apiURL+codigo)
  }

  alta(articulo:Articulo):Observable<Articulo>{
    return this._http.post<Articulo>(this.apiURL,articulo)
  }

  modificar(articulo:Articulo):Observable<Articulo>{
    return this._http.put<Articulo>(this.apiURL+articulo.id,articulo)
  }

  baja(id:string):Observable<any>{
    return this._http.delete(this.apiURL+id)
  }
}
