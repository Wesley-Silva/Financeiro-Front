import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoriaComponent } from "./categoria.component";
import { CategoriaRoutingModule } from "./categoria-routing.module";
import { NavBarModule } from "src/app/components/navbar/navbar.module";
import { SideBarModule } from "src/app/components/sidebar/sidebar.module";

@NgModule({
    providers:[],
    declarations:[CategoriaComponent],
    imports:[
        CommonModule,
        CategoriaRoutingModule,
        NavBarModule,
        SideBarModule
    ]
})

export class CategoriaModule{
    
}
