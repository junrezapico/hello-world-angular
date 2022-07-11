import { Component, OnInit } from '@angular/core';
import { Todo } from './types';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todo: Todo = {
    id: 1,
    todo: 'Windstorm'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
