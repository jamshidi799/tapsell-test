import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Task } from "src/app/models/Task";
import { TaskService } from "../../services/task.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnChanges {
  @Input() listId: string = "5e5e4bbeee5b26339693d8ae";
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  // ngOnInit() {
  //   // console.log(this.listId, ";lakdsjf");
  //   this.taskService
  //     .getTasksByListId(this.listId)
  //     .subscribe(tasks => (this.tasks = tasks));
  // }

  ngOnChanges() {
    this.getTasks(this.listId);
  }

  getTasks(id: string) {
    this.taskService
      .getTasksByListId(id)
      .subscribe(
        tasks => (this.tasks = tasks.filter(task => task.done == false))
      );
  }

  deleteTask(task: Task) {
    // Remove From UI
    this.tasks = this.tasks.filter(t => t._id !== task._id);
    // Remove from server
    this.taskService.deleteTask(task).subscribe();
  }

  addToComplete(task: Task) {
    // Remove From UI
    this.tasks = this.tasks.filter(t => t._id !== task._id);
    const completedTask: Task = { ...task, done: true };
    // Add To Completed Task
    this.taskService.addToCompleted(completedTask).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(task => {
      this.tasks.push(task);
    });
  }
}
