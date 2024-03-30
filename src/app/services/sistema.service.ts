import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments";
import { SistemaFinanceiro } from "../models/SistemaFinanceiro";

@Injectable({
  providedIn: 'root'
})

export class SistemaService {
  constructor(private httpClient : HttpClient) {

  }

  private readonly baseUrl = environment["endPoint"];

  AdicionarSistemaFinanceiro(sistemaFinanceiro: SistemaFinanceiro)
  {
    return this.httpClient.post<SistemaFinanceiro>(`${this.baseUrl}/AdicionarSistemaFinanceiro`, sistemaFinanceiro)
  }

  ListaSistemaUsuario(emailUsuario: string)
  {
    return this.httpClient.get(`${this.baseUrl}/ListaSistemaUsuario?emailUsuario=${emailUsuario}`);
  }

  CadastrarUsuarioNoSistema(idSistema: number, emailUsuario : string)
    {
        return  this.httpClient.post<any>(`${this.baseUrl}/CadastrarUsuarioNoSistema?idSistema=${idSistema}&emailUsuario=${emailUsuario}`,null)
    }
}
