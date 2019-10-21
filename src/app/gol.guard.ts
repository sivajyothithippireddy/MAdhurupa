import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GolGuard implements CanActivate  {

  constructor(private g:Router){
  
  }
  canActivate(): boolean  {
    let val=window.prompt("enter the value");
    console.log(val);
   if(val=='admin')
   return true;
   else
   this.g.navigate(['tabel'])
   return false;
  }
  
}
