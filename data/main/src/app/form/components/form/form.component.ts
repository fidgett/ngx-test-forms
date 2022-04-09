import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public result$: Observable<any> | undefined;
  public form: FormGroup = this.formBuilder.group({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.result$ = this.form.valueChanges;
  }

  public getControls(): FormArray {
    return this.form.get('controls') as FormArray;
  }
}
