import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onChangeKey = (key: 'email' | 'password', ev: Event) => {
    if (!(ev.target instanceof HTMLInputElement)) return;
    this[key] = `${ev.target.value}`;
  };

  handleSubmit = (): void => {
    if (!this.email || !this.password) {
      alert('missing fields');
      return;
    }
    this.authService.signIn();
    // this.router.navigate(['todo']);
    // this.router.navigateByUrl('todo');
  };
}
