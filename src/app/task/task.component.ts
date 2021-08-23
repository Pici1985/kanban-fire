import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: any;
  // itt lehet van bibi

  @Output() edit = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
