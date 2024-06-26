import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoriaComponent } from "./categoria.component";
import { CategoriaRoutingModule } from "./categoria-routing.module";
import { NavBarModule } from "src/app/components/navbar/navbar.module";
import { SideBarModule } from "src/app/components/sidebar/sidebar.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxPaginationModule } from "ngx-pagination";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
    providers:[],
    declarations:[CategoriaComponent],
    imports:[
        CommonModule,
        CategoriaRoutingModule,
        NavBarModule,
        SideBarModule,
        FormsModule,
        ReactiveFormsModule,
        NgSelectModule,
        NgxPaginationModule,
        FormsModule,
        NgSelectModule,
        MatIconModule
    ]
})

export class CategoriaModule{

}
