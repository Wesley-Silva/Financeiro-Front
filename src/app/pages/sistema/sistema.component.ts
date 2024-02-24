import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.css']
})
export class SistemaComponent {
  constructor(public menuService: MenuService, public formBuilder: FormBuilder)
  {
    
  }

  sistemForm: FormGroup;

  ngOnInit(){
      this.menuService.menuSelecionado = 2;

      this.sistemForm = this.formBuilder.group
      (
        {
          name: ['', [Validators.required]]
        }
      )
  }

  dadosForm(){
    return this.sistemForm.controls;
  }

  enviar(){
    debugger;
    var dados = this.dadosForm();
    alert(dados["name"].value)
  }
}
