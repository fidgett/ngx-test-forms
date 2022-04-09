import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormItemComponent } from './form-item.component';



@NgModule({
    declarations: [
        FormItemComponent
    ],
    exports: [
        FormItemComponent
    ],
    imports: [
        CommonModule
    ]
})
export class FormItemModule { }
