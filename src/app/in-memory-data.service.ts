import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './molecules/todolist/types';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      { id: 12, todo: 'Dr. Nice' },
      { id: 13, todo: 'Bombasto' },
      { id: 14, todo: 'Celeritas' },
      { id: 15, todo: 'Magneta' },
      { id: 16, todo: 'RubberMan' },
      { id: 17, todo: 'Dynama' },
      { id: 18, todo: 'Dr. IQ' },
      { id: 19, todo: 'Magma' },
      { id: 20, todo: 'Tornado' }
    ];
    return {todos};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(hero => hero.id)) + 1 : 11;
  }
}