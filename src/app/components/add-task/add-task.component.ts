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

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const task = {
      title: this.title,
      description: this.description,
      list: this.listId,
      done: false
    };

    this.addTask.emit(task);
  }
}
