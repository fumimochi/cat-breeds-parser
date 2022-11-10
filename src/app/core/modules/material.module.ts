import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';


@NgModule({
    exports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatTabsModule,
        MatSelectModule,
        MatCardModule
    ]
})
export class MaterialModule {}