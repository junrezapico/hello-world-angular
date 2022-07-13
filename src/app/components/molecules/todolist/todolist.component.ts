import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from './types';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  todoList: Todo[] = [
    // {
    //   id: 1,
    //   todo: 'Todo 1',
    // },
    // {
    //   id: 2,
    //   todo: 'Todo 2',
    // },
    // {
    //   id: 3,
    //   todo: 'Todo 3',
    // },
  ];
  selectedTodo: Todo | undefined = undefined;
  constructor(private todoService: TodoService) {}

  fetchTodos(): void {
    // this.todoList = this.todoService.getTodos();

    this.todoService
      .getTodos()
      .subscribe((todoList) => (this.todoList = todoList));
  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  onSelect = (todo: Todo): void => {
    this.selectedTodo = todo;
  };
}
