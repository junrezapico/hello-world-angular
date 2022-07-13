import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-card',
  templateUrl: './counter-card.component.html',
  styleUrls: ['./counter-card.component.scss'],
})
export class CounterCardComponent implements OnInit {
  counterCount$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.counterCount$ = store.pipe(select('count'));
  }


  ngOnInit(): void {}
}
