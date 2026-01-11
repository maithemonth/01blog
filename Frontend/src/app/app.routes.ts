import { Routes } from '@angular/router';
import { Login} from './login/login';
import {Register} from './register/register'
import {Profile} from './profile/profile'
import { App } from './app';
export const routes: Routes = [
  { path: 'home', component: App }, 
      { path: 'login', component: Login },
      {path: 'register', component:Register},
      {path: 'profile', component:Profile},
];
