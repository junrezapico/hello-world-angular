import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onChangeKey = (key: 'email' | 'password', ev: Event) => {
    if (!(ev.target instanceof HTMLInputElement)) return;
    this[key] = `${ev.target.value}`;
  };

  handleSubmit = (): void => {
    if(!this.email || !this.password){
      alert('missing fields');
      return;
    }
    // this.router.navigate(['todo']);
    this.router.navigateByUrl('todo');
    
  };
}
