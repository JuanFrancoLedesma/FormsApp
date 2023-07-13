import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmailValidator implements AsyncValidator {
  constructor() {}
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>((subscriber)=>{

        console.log({email});

        if(email === 'juan@gmail.com'){
            subscriber.next({emailTaken: true});
            subscriber.complete(); //Cuando se completa no emite mas valores, es igual a un return
        }

        subscriber.next(null);
        subscriber.complete();
        
    }).pipe(
        delay(3000)
    )

    return httpCallObservable;

  }

  
}
