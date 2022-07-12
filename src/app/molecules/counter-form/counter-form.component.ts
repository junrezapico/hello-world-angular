import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset } from '../../store/counter/actions';

@Component({
  selector: 'app-counter-form',
  templateUrl: './counter-form.component.html',
  styleUrls: ['./counter-form.component.scss'],
})
export class CounterFormComponent implements OnInit {
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit(): void {}

  onClickIncrement = () => {
    this.store.dispatch(new Increment());
  };

  onClickDecrement = () => {
    this.store.dispatch(new Decrement());
  };

  onClickReset = () => {
    this.store.dispatch(new Reset());
  };
}
