import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sistema',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  constructor(public menuService: MenuService)
  {
    
  }

  ngOnInit(){
      this.menuService.menuSelecionado = 3;
  }
}
