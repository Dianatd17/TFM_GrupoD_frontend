import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
 
export const authGuard: CanActivateChildFn = (childRoute, state) => {

  const router = inject(Router);

  if (localStorage.getItem('auth_token')) {
    const token = localStorage.getItem('auth_token');
    const tokenDecode = jwtDecode(token!);
    return true;
  }
  router.navigate(['/auth', 'login']);
  return false;
};
