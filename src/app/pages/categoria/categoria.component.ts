import { SistemaFinanceiro } from './../../models/SistemaFinanceiro';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/Categoria';
import { SelectModel } from 'src/app/models/SelectModel';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MenuService } from 'src/app/services/menu.service';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-sistema',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {

  tipoTela:number =1; // 1 listagem - 2 cadastro - 3 edição
tableListCategoria: Array<Categoria>;
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
  this.categoriaForm.reset();
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

ListarCategoriaUsuario()
{
  this.tipoTela = 1;

  this.categoriaService.ListarCategoriaUsuario(this.authService.getEmailUser())
    .subscribe((response: Array<Categoria>) => {
      this.tableListCategoria = response;

    }, (error) => console.error(error),
      () => { })
}

  constructor(public menuService: MenuService, public formBuilder: FormBuilder,
    public sistemaService: SistemaService, public authService : AuthService,
    public categoriaService : CategoriaService) {
  }

  listSistemas = new Array<SelectModel>();
  sistemaSelect = new SelectModel();

  categoriaForm: FormGroup;

  ngOnInit() {
    this.menuService.menuSelecionado = 3;

    this.configpag();

    this.ListarCategoriaUsuario()

    this.categoriaForm = this.formBuilder.group
      (
        {
          name: ['', [Validators.required]],
          sistemaSelect:['',Validators.required]
        }
      )

      this.ListaSistemasUsuario();
  }


  dadorForm() {
    return this.categoriaForm.controls;
  }

  enviar() {
    debugger
    var dados = this.dadorForm();

    let item = new Categoria();
    item.nome = dados["name"].value;
    item.id =0;
    item.idsistema = parseInt(this.sistemaSelect.id)

    this.categoriaService.AdicionarCategoria(item)
    .subscribe((response: Categoria) => {

      this.categoriaForm.reset();

      this.ListarCategoriaUsuario()

    }, (error) => console.error(error),
      () => { })

  }


  ListaSistemasUsuario() {
    this.sistemaService.ListaSistemaUsuario(this.authService.getEmailUser())
      .subscribe((reponse: Array<SistemaFinanceiro>) => {

        var lisSistemaFinanceiro = [];

        reponse.forEach(x => {
          var item = new SelectModel();
          item.id = x.id.toString();
          item.name = x.nome;

          lisSistemaFinanceiro.push(item);

        });

        this.listSistemas = lisSistemaFinanceiro;

      }

      )
  }


}
