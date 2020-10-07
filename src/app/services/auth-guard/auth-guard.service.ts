import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServicesService } from '../auth-services/auth-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private auth:AuthServicesService,
    private router:Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if(this.auth.isLoggedIn()) return true;
    this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
    return false;
  
    }
  }
