import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-card',
  templateUrl: './counter-card.component.html',
  styleUrls: ['./counter-card.component.scss'],
})
export class CounterCardComponent implements OnInit {
  count = 0;

  constructor() {}

  ngOnInit(): void {}
}
