import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      if( this.isLoggedin()){
        return true;
      }
      this.router.navigate(['/login']);
      return false;
   
  }
  public isLoggedin():boolean{
    let loginStatus=false;
    if(localStorage.getItem('isLoggedin')=="true"){
      loginStatus=true;
    }
    else {
      loginStatus=false;
    }
    return loginStatus;
  }
  
}
