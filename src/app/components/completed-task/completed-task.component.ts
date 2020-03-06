import { Component, OnInit } from "@angular/core";
import { Task } from "src/app/models/Task";
import { TaskService } from "src/app/services/task.service";

@Component({
  selector: "app-completed-task",
  templateUrl: "./completed-task.component.html",
  styleUrls: ["./completed-task.component.css"]
})
export class CompletedTaskComponent implements OnInit {
  step: string;
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService
      .getCompletedTask()
      .subscribe(tasks => (this.tasks = tasks));
  }

  setStep(index: string) {
    this.step = index;
  }

  onDelete(taskId: string) {
    this.tasks = this.tasks.filter(task => task._id !== taskId);
    this.taskService.deleteTask(taskId).subscribe();
  }

  reformatDate(date: string) {
    const dateObj = new Date(date);
    const reformattedDate =
      dateObj.getDate() +
      "/" +
      dateObj.getMonth() +
      "/" +
      dateObj.getFullYear();
    return reformattedDate;
  }
}
