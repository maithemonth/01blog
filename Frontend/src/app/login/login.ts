import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',

})
export class Login {
    constructor(private api: ApiService) {}   // <-- inject service

  loginData={
    username:'',
    password:''
  }
 
  onSubmit() {
    console.log("Component sending:", this.loginData);

    // call the test function in your service
    const result = this.api.testLOgin(this.loginData);

    console.log("Service returned:", result);
  }
}
