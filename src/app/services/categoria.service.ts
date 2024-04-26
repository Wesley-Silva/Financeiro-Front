import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments";
import { Categoria } from "../models/Categoria";

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {
  constructor(private httpClient : HttpClient) {

  }

  private readonly baseUrl = environment["endPoint"];

  AdicionarCategoria(categoria: Categoria)
  {
    return this.httpClient.post<Categoria>(`${this.baseUrl}/AdicionarCategoria`, categoria)
  }

  ListarCategoriaUsuario(emailUsuario: string)
  {
    return this.httpClient.get(`${this.baseUrl}/ListarCategoriaUsuario?emailUsuario=${emailUsuario}`);
  }

  ObterCategoria(id: number)
  {
    return this.httpClient.get(`${this.baseUrl}/ObterCategoria?id=${id}`);
  }

  AtualizarCategoria(categoria: Categoria) {
    return this.httpClient.put<Categoria>(`${this.baseUrl}/AtualizarCategoria`,
    categoria)
  }
}
