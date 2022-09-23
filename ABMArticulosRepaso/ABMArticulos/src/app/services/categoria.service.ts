import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private dominio: string = "categoria/"
  private apiURL: string = environment.apiURLBase+this.dominio
  constructor(private _http:HttpClient) { }

  obtenerTodas():Observable<Categoria[]>{
    const headers = { 'content-type': 'application/json charset=utf-8' }
    console.log(this.apiURL)
    return this._http.get<Categoria[]>(this.apiURL,{"headers":headers})
  }
}
