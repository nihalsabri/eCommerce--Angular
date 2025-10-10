import {  inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuth } from '../services/user-auth';

export const authGuard: CanActivateFn = (route, state) => {
  let useAuth = inject(UserAuth)
  let router = inject(Router)
  if(useAuth.isuserloggedProp){
    return true
  } else {
    alert("Login !!")
router.navigate(['signup'])
    return false;
  }
  
  
};
