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
    // this.clickMessage = 'MOUSE CLICKED';
    // this.todoService.insertTodo(this.clickMessage);

    this.todoService.insertTodo(this.clickMessage).subscribe((hero) => {
      // this.heroes.push(hero);
    });
  };

  onMyMouseOver = (ev: MouseEvent) => {
    this.clickMessage = 'MOUSE OVERED';
  };

  onChangeKey = (ev: Event) => {
    if (!(ev.target instanceof HTMLInputElement)) return;
    this.clickMessage = `${ev.target.value}`;
  };
}
