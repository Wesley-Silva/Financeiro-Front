import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SistemaComponent } from "./sistema.component";
import { SistemaRoutingModule } from "./sistema-routing.module";
import { NavBarModule } from "src/app/components/navbar/navbar.module";
import { SideBarModule } from "src/app/components/sidebar/sidebar.module";

@NgModule({
    providers:[],
    declarations:[SistemaComponent],
    imports:[
        CommonModule,
        SistemaRoutingModule,
        NavBarModule,
        SideBarModule
    ]
})

export class SistemaModule{
    
}
