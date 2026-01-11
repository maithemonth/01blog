import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',

})
export class Login {
  loginData={
    username:'',
    password:''
  }
  onSubmit(){
    console.log(this.loginData);
  }
}
