import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState } from '../store/reducers';

@Injectable({
  providedIn: 'root',
})
export class RoutesAuthGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}
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
          console.log('testtt', authState);
          return true;
        })
      );
    console.log('hahahazz', state.url);
    /*
    this.store.select(testCount).pipe(
      map((test) => {
        console.log('testtt', test);
      })
    );
    console.log('hahahazz', state.url);
    return true;
    */
  }
}
