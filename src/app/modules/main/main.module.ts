import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from "../../core/modules/material.module";
import { ControllerComponent } from "./components/controller/controller.component";
import { ViewComponent } from "./components/view/view.component";
import { MainComponent } from "./main.component";

@NgModule({
    declarations: [
        MainComponent,
        ControllerComponent,
        ViewComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    exports: [
        MainComponent
    ]
})
export class MainModule { }