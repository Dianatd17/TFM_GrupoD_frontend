import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
 
export const authGuard: CanActivateChildFn = (childRoute, state) => {

  const router = inject(Router);

  if (localStorage.getItem('auth_token')) {
    // TODO: falta comprobar si el token es correcto en el server
    const token = localStorage.getItem('auth_token');
    const tokenDecode = jwtDecode(token!);
    return true;
  }
  router.navigate(['/auth', 'login']);
  return false;
};
