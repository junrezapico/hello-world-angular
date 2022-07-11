import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../molecules/todolist/types';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoList: Todo[] = [
    // {
    //   id: 1,
    //   todo: 'Service Todo 1',
    // },
    // {
    //   id: 2,
    //   todo: 'Service Todo 2',
    // },
    // {
    //   id: 3,
    //   todo: 'Service Todo 3',
    // },
  ];

  constructor() {}
  // getTodos = (): Todo[] => {
  //   return this.todoList;
  // };
  getTodos(): Observable<Todo[]> {
    const todoList = of(this.todoList);
    console.log('ifetch daw');
    return todoList;
  }

  insertTodo = (todo: string): void => {
    this.todoList.push({ id: this.todoList.length, todo });
  };
}
