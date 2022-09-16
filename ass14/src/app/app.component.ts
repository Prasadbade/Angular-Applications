import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ass14';
  Contactform=new FormGroup
  (
    {
      fname:new FormControl('',Validators.required),
      lname:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      phone:new FormControl('',[Validators.required,Validators.pattern("[0-9]{10}")]),
      address:new FormGroup
      (
        {
          city:new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern("[a-zA-z]{4,10}")]),
          state:new FormControl('',[Validators.required,Validators.pattern("[a-zA-z]{2,15}")]),
          ZIP_code:new FormControl('',[Validators.required,Validators.pattern("[0-9]{5}")]),
          comments:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z. ]{30,120}")])
          
        }
      )
    }
  )
   public submit()
   {
    console.log(this.Contactform.value)
   }

}
