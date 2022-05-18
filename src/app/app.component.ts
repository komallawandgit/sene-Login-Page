import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ValidationServiceService} from './validation-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login';
  loginForm: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,private val :ValidationServiceService)
    {}
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required,Validators.email]],
          password: ['', [Validators.required,Validators.minLength(8),this.val.specialValidator, this.val.uppercaseValidatorValidator,
            this.val.lowerCaseValidator,
            this.val.numberValidator,]]
      });

    
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted= true;
    if (this.loginForm.invalid) {
        return;
    }
    else{
   
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));

    }
   
  }



}
