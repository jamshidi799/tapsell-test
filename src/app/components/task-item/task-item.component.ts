import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Task } from "src/app/models/Task";
import { TaskService } from "src/app/services/task.service";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.css"]
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() addToComplete: EventEmitter<Task> = new EventEmitter();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  onToggle(task) {
    // Toggle in UI
    task.done = !task.done;
    // Toggle on server
    this.taskService.addToCompleted(task).subscribe(task => console.log(task));
  }

  onDelete(task) {
    this.deleteTask.emit(task);
  }

  onDoneClicked(task: Task) {
    this.addToComplete.emit(task);
  }
}
