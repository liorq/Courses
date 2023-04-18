import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLevelGuard implements CanActivate {
  ///
  constructor(private router:Router,private authSvc:UserInfoService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let encryptedAuthLevel = this.authSvc.decryptedHandler(localStorage.getItem('authLevel')||"");
      console.log('Decrypted string:', encryptedAuthLevel);

      if (encryptedAuthLevel === "professor") {
        return true;
    }
    else {
      return this.router.navigate(['/sign-in']);
    }
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let encryptedAuthLevel = this.authSvc.decryptedHandler(localStorage.getItem('authLevel')||"");
    if (encryptedAuthLevel === "professor") {
      return true;
    }
    else {
      return this.router.navigate(['/sign-in']);
    }
  }
}
