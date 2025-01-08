import { NgModule } from "@angular/core";

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
    declarations: [],
    imports: [
        MatListModule,
        MatDividerModule
    ],
    exports: [
        MatListModule,
        MatDividerModule
    ]
})

export class AngularMaterialModule { }