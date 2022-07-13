import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SetCurrentUser, SignOut } from '../store/auth/actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private store: Store, private router: Router) {}

  signIn = (): void => {
    setTimeout(() => {
      this.store.dispatch(
        new SetCurrentUser({ uid: `${new Date().getTime()}` })
      );
      this.router.navigateByUrl('todo');
    }, 1000);
  };

  signOut = (): void => {
    setTimeout(() => {
      this.store.dispatch(new SignOut());
      this.router.navigateByUrl('login');
    }, 1000);
  };
}
