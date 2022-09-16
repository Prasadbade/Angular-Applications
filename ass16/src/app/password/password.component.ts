import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password'
})
export class PasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
export function CheckPass(data:string)
{
  if(data.match(/^((?=.*?[A-Z]){2,})((?=.*?[a-z]){3,})((?=.*?[0-9]){2,})((?=.*?[^\w\s]){1,}).{8,}$/))
  {
    return 1;
  }
  
}
