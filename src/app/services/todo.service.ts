import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Todo } from '../molecules/todolist/types';
import { Increment, Decrement, Reset } from '../store/counter/actions';


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosUrl = 'api/todos'; // URL to web api

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
  constructor(
    private http: HttpClient,
    private store: Store<{ count: number }>
  ) {}
  // getTodos = (): Todo[] => {
  //   return this.todoList;
  // };
  getTodos(): Observable<Todo[]> {
    return this.http
      .get<{ id: number; title: string }[]>(
        'https://jsonplaceholder.typicode.com/todos'
      )
      .pipe(
        map((response) => {
          console.log('haa?', response);
          return response.map((res) => ({ id: res.id, todo: res.title }));
        })
      );
    // .subscribe((luke) => console.log(luke));
    // return this.http.get<Todo[]>(this.todosUrl);
    // const todoList = of(this.todoList);
    // console.log('ifetch daw');
    // return todoList;
  }

  // insertTodo = (todo: string): void => {
  //   this.todoList.push({ id: this.todoList.length, todo });
  // };
  insertTodo(todo: string): Observable<Todo> {
    console.log('HOY', todo);
    this.store.dispatch(new Increment());

    return this.http
      .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {})
      .pipe(
        tap((newHero: Todo) => console.log(`added hero w/ id=${newHero.id}`))
        // catchError((err) => {
        //   console.log('error adding', err);
        // })
      );
    // return this.http.post<Todo>(this.todosUrl, todo, {}).pipe(
    //   tap((newHero: Todo) => console.log(`added hero w/ id=${newHero.id}`))
    //   // catchError((err) => {
    //   //   console.log('error adding', err);
    //   // })
    // );
  }
}
