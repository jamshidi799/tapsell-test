import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Task } from "../models/Task";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class TaskService {
  TasksUrl: string = "http://localhost:3000/api/tasks";
  CompletedTaskUrl: string = "http://localhost:3000/api/completed";

  constructor(private http: HttpClient) {}

  // Get Tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.TasksUrl);
  }

  // Get Tasks by list id
  getTasksByListId(id: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.TasksUrl}${"/query/"}${id}`);
  }

  getCompletedTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.CompletedTaskUrl);
  }

  // Delete Task
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.TasksUrl}/${task._id}`;
    return this.http.delete<Task>(url, httpOptions);
  }

  // Add Task
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.TasksUrl, task, httpOptions);
  }

  editTask(task: Task): Observable<any> {
    const url = `${this.TasksUrl}/${task._id}`;
    return this.http.put(url, task, httpOptions);
  }

  addToCompleted(task: Task): Observable<any> {
    const url = `${this.TasksUrl}/${task._id}`;
    return this.http.put(url, task, httpOptions);
  }
}
