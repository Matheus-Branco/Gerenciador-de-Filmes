import { HttpClient } from '@angular/common/http'
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs'

  @Injectable({
    providedIn: 'root',
  })
  export class FilmeService {
    private readonly urlApi: string = 'https: //api.themoviedb.org/3/movie/'

    constructor(private http: HttpClient){}

    public selecionarFilmesPopulares(): Observable<any> {
      const urlCompleto = `${this.urlApi}/popular?language=pt-BR`

      return this.http.get<any>(urlCompleto)
    }

    private obterHeadersAutorizacao() {
      return {
        method: 'GET',
        header: {
          accept: 'application/json',
          Authorization: chaveDaApi
        }
      }
    }
  }
