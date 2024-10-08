import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { SeguridadService } from "./seguridad.service";
import { Injectable } from "@angular/core";



@Injectable()
export class SeguridadRouter implements CanActivate{

constructor(private seguridadService : SeguridadService, private router : Router) {


}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.seguridadService.onSesion())
      {
        return true;
      }
      else
      {
         this.router.navigate(['/login']);
         return false;
      }
  }



}
