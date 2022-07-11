import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.scss']
})
export class TextinputComponent implements OnInit {
  clickMessage = '';


  constructor() { }

  ngOnInit(): void {
  }

  onMyClickMe = (ev: any) => {
    console.log('MOUSE CLICKED', ev);
    this.clickMessage = 'MOUSE CLICKED';
  }

  onMyMouseOver = (ev: any) => {
    console.log('MOUSE OVERED', ev);
    this.clickMessage = 'MOUSE OVERED';
  }

  onChangeKey = (ev: any) => {
    console.log('CHANGED', ev.target.value);
    this.clickMessage = `${ev.target.value}`;
  }

}
