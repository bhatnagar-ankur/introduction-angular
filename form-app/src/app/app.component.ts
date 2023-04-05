import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstFormGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    address1: ['', Validators.required],
    address2: ['', Validators.required],
  });
  isLinear = true;

  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  submitForm(): void {
    const payLoad = {
      'First Name': this.firstFormGroup.value.firstName,
      'Last Name': this.firstFormGroup.value.lastName,
      'Full Address': `${this.secondFormGroup.value.address1}, ${this.secondFormGroup.value.address2}`
    }

    // alert(JSON.stringify(payLoad));

    this._snackBar.open('PayLoad', JSON.stringify(payLoad));
  }
}
