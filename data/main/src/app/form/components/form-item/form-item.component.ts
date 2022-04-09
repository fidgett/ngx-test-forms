import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FormItemComponent,
    },
  ]
})
export class FormItemComponent implements ControlValueAccessor {
  public value!: string;

  onChange = (_value: string) => {};
  onTouch = () => {};


  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(cb: (value: string) => {}) {
    this.onChange = cb;
  }

  registerOnTouched(cb: () => {}) {
    this.onTouch = cb;
  }


  public onInput(value: string) {
    this.onChange(value);
  }
}
