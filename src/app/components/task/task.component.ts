import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Task } from "src/app/models/Task";
import { TaskService } from "../../services/task.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  @Input() listId: string = "5e5e4bbeee5b26339693d8ae";
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    // console.log(this.listId, ";lakdsjf");
    this.taskService
      .getTasksByListId(this.listId)
      .subscribe(tasks => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    // Remove From UI
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    // Remove from server
    this.taskService.deleteTask(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(task => {
      this.tasks.push(task);
    });
  }
}
