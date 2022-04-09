import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormItemModule } from '../form-item/form-item.module';
import { FormComponent } from './form.component';



@NgModule({
    declarations: [
        FormComponent
    ],
    exports: [
        FormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormItemModule
    ]
})
export class FormModule { }
