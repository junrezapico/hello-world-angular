import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-form',
  templateUrl: './counter-form.component.html',
  styleUrls: ['./counter-form.component.scss'],
})
export class CounterFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onClickIncrement = () => {
    alert('increment');
  };

  onClickDecrement = () => {
    alert('decrement');
  };
}
