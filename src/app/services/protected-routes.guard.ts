import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from '../store/reducers';

@Injectable({
  providedIn: 'root',
})
export class ProtectedRoutesGuard implements CanActivate {
  constructor(private store: Store<AppState>, private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store
      .select((appState) => {
        return appState.auth;
      })
      .pipe(
        map((authState) => {
          const isLoggedIn = !!authState?.uid;
          if (!isLoggedIn) {
            this.route.navigateByUrl('/login');
          }
          return isLoggedIn;
        })
      );
  }
}
