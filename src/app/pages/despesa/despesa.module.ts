import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DespesaComponent } from "./despesa.component";
import { DespesaRoutingModule } from "./despesa-routing.module";
import { NavBarModule } from "src/app/components/navbar/navbar.module";
import { SideBarModule } from "src/app/components/sidebar/sidebar.module";

@NgModule({
    providers:[],
    declarations:[DespesaComponent],
    imports:[
        CommonModule,
        DespesaRoutingModule,
        NavBarModule,
        SideBarModule
    ]
})

export class DespesaModule{
    
}
