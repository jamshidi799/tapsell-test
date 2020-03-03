import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { List } from "../models/List";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class ListService {
  listsUrl: string = "http://localhost:3000/api/lists";
  mainListUrl: string = "http://localhost:3000/api/mainList";

  constructor(private http: HttpClient) {}

  // Get Lists
  getLists(): Observable<List[]> {
    return this.http.get<List[]>(this.listsUrl);
  }

  // GET LIST BY ID
  getList(id: string): Observable<List> {
    return this.http.get<List>(`${this.listsUrl}/${id}`);
  }

  getMainList(): Observable<List> {
    return this.http.get<List>(this.mainListUrl);
  }

  // Delete List
  deleteList(list: List): Observable<List> {
    const url = `${this.listsUrl}/${list._id}`;
    return this.http.delete<List>(url, httpOptions);
  }

  // Add List
  addList(list: List): Observable<List> {
    return this.http.post<List>(this.listsUrl, list, httpOptions);
  }

  editList(list: List): Observable<any> {
    const url = `${this.listsUrl}/${list._id}`;
    return this.http.put(url, list, httpOptions);
  }
}
