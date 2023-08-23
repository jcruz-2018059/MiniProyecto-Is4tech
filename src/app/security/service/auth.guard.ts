// Angular
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const isAuthenticated = localStorage.getItem('authToken') !== null;
  
  if (isAuthenticated) {
    return true; 
  } else {
    return false;
  }
};