import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Task } from "src/app/models/Task";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"]
})
export class AddTaskComponent implements OnInit {
  @Output() addTask: EventEmitter<any> = new EventEmitter();
  @Input() listId: EventEmitter<number> = new EventEmitter();

  title: string;
  description: string;
  panelOpenState = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.panelOpenState = false;
    const task = {
      title: this.title,
      description: this.description,
      list: this.listId,
      done: false
    };
    console.log("on submit");
    this.addTask.emit(task);
  }
}
