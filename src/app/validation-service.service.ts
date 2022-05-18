import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationServiceService {

  constructor() { }
  specialValidator  (control: AbstractControl): {[key:string]: boolean} | null {
    debugger
    let value: string = control.value || '';
    if (!value) {
        return null
      }
    let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (specialCharacters.test(value) === false) {
        return {
          specialValidator:true 
         };
        }
  };
  uppercaseValidatorValidator (control:AbstractControl): {[key:string]: boolean} | null {
    let value: string = control.value || '';
      if (!value) {
        return null;
      }
      let upperCaseCharacters = /[A-Z]+/g;
      if (upperCaseCharacters.test(value) === false) {
        return {
          uppercaseValidatorValidator:true 
         };
        }
     };
     lowerCaseValidator  (control: AbstractControl): {[key:string]: boolean} | null {
      let value: string = control.value || '';
      if (!value) {
        return null
      };
      let lowerCaseCharacters = /[a-z]+/g;
      if (lowerCaseCharacters.test(value) === false) {
        return {
          lowerCaseValidator:true 
         };
        }
    };
    
  numberValidator (control: AbstractControl): {[key:string]: boolean} | null {
  let value: string = control.value || '';
     if (!value) {
        return null;
      }
       let numberCharacters = /[0-9]+/g;
      if (numberCharacters.test(value) === false) {
        return {
          numberValidator:true 
         };
        }
  };
}
