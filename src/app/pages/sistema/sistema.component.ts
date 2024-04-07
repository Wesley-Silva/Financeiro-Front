import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SistemaFinanceiro } from 'src/app/models/SistemaFinanceiro';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent {

tipoTela:number =1; // 1 listagem - 2 cadastro - 3 edição
tableListSistemas: Array<SistemaFinanceiro>;
id:string;

page: number = 1.
config: any;
paginacao: boolean = true;
itemsPorPagina: number = 10;

configpag()
{
  this.id = this.gerarIdParaConfigDePaginacao()

  this.config = {
    id: this.id,
    currentPage: this.page,
    itemsPerPage: this.itemsPorPagina
  }
}

gerarIdParaConfigDePaginacao() {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

cadastro()
{
  this.tipoTela = 2;
  this.sistemaForm.reset();
}

mudarItemsPorPage() {
  this.page = 1
  this.config.currentPage = this.page;
  this.config.itemsPerPage = this.itemsPorPagina;
}

mudarPage(event: any) {
  this.page = event;
  this.config.currentPage = this.page;
}

ListaSistemaUsuario()
{
  this.tipoTela = 1;

  this.sistemaService.ListaSistemaUsuario(this.authService.getEmailUser())
    .subscribe((response: Array<SistemaFinanceiro>) => {
      this.tableListSistemas = response;

    }, (error) => console.error(error),
      () => { })
}

  constructor(public menuService: MenuService,
              public formBuilder: FormBuilder,
              public sistemaService: SistemaService,
              public authService:AuthService)
  {

  }

  sistemaForm: FormGroup;

  ngOnInit(){
      this.menuService.menuSelecionado = 2;

      this.configpag();
      this.ListaSistemaUsuario();

      this.sistemaForm = this.formBuilder.group
      (
        {
          name: ['', [Validators.required]]
        }
      )
  }

  dadosForm(){
    return this.sistemaForm.controls;
  }

  enviar(){
    debugger;
    var dados = this.dadosForm();

    let item = new SistemaFinanceiro();
    item.nome = dados["name"].value;

    item.id = 0;
    item.Mes = 0;
    item.ano = 0;
    item.diaFechamento = 0;
    item.gerarCopiadespesa = true;
    item.mesCopia = 0;
    item.anoCopia = 0;

    this.sistemaService.AdicionarSistemaFinanceiro(item)
    .subscribe((response: SistemaFinanceiro) => {

      this.sistemaForm.reset();

      this.sistemaService.CadastrarUsuarioNoSistema(response.id,this.authService.getEmailUser())
      .subscribe((response: any) => {
        debugger
      }, (error) => console.error(error),
        () => { })

    }, (error) => console.error(error),
      () => { })
    //alert(dados["name"].value)
  }
}
