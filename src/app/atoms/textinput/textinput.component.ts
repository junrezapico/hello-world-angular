import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss'],
})
export class TextinputComponent implements OnInit {
  clickMessage = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onMyClickMe = (ev: MouseEvent) => {
    console.log('MOUSE CLICKED', ev);
    // this.clickMessage = 'MOUSE CLICKED';
    this.todoService.insertTodo(this.clickMessage);
  };

  onMyMouseOver = (ev: MouseEvent) => {
    console.log('MOUSE OVERED', ev);
    this.clickMessage = 'MOUSE OVERED';
  };

  onChangeKey = (ev: Event) => {
    if (!(ev.target instanceof HTMLInputElement)) return;
    console.log('CHANGED', ev.target.value);
    this.clickMessage = `${ev.target.value}`;
  };
}
