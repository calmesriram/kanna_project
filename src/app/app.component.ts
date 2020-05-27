import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  public payload:any={};
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      gstno: ['', Validators.required]
    });
  }
  title="GST"
getdetails(){
   this.payload ={
    firstname:this.firstFormGroup.value.firstname,
    lastname:this.firstFormGroup.value.lastname,
    gstno:this.secondFormGroup.value.gstno,
  }
  // this.myarray =payload;
  console.log(this.payload)
}
  
}
