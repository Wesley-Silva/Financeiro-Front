import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DespesaComponent } from "./despesa.component";
import { DespesaRoutingModule } from "./despesa-routing.module";
import { NavBarModule } from "src/app/components/navbar/navbar.module";
import { SideBarModule } from "src/app/components/sidebar/sidebar.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

@NgModule({
    providers:[],
    declarations:[DespesaComponent],
    imports:[
        CommonModule,
        DespesaRoutingModule,
        NavBarModule,
        SideBarModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        MatSlideToggleModule
    ]
})

export class DespesaModule{

}
