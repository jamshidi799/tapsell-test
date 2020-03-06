import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { Task } from "src/app/models/Task";
import { EditTaskComponent } from "../edit-task/edit-task.component";
import { from } from "rxjs";
import { ListService } from "src/app/services/list.service";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.css"]
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<string> = new EventEmitter();
  @Output() addToComplete: EventEmitter<Task> = new EventEmitter();
  @Output() editTask: EventEmitter<Task> = new EventEmitter();
  @Output() addToHomePage: EventEmitter<Task> = new EventEmitter();
  date: string;
  isDailyTask: boolean;

  constructor(public dialog: MatDialog, private listService: ListService) {}

  ngOnInit(): void {
    this.reformatDate();
    if (this.task.list === this.listService.getMainListId())
      this.isDailyTask = true;
  }

  reformatDate() {
    let dateObj = new Date(this.task.date);
    this.date =
      dateObj.getDate() +
      "/" +
      dateObj.getMonth() +
      "/" +
      dateObj.getFullYear();
  }

  onDelete() {
    this.deleteTask.emit(this.task._id);
  }

  onDoneClicked() {
    this.addToComplete.emit(this.task);
  }

  onEditTask(newTast: Task) {
    this.task = { ...newTast };
    this.editTask.emit(this.task);
  }

  onHomeClicked() {
    this.addToHomePage.emit(this.task);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: "250px",
      data: { ...this.task }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onEditTask(result);
    });
  }
}
